import { Component, ViewChild } from '@angular/core';
import data from '../../../assets/dummy.json';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/services/shared.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator'; // Import the PageEvent and MatPaginator
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.css']
})
export class TabularDataComponent {
  @ViewChild('input') input: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add the MatPaginator reference
  selectedMetaTab!: any;
  dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array
  displayedColumns: string[] = [];
  status: number = 0;
  errorMessage: string = '';
  filterValue: string = '';
  totalItems: number = 0;
  pageIndex: number = 0;
  pageSize: number = 10;
  pagedData: any[] = [];
  response!: any;
  tabsSelected: any;

  private selectedMetaTabSubscription: Subscription | undefined;


  constructor(private sharedService: SharedService) {}

  async ngOnInit() {
    this.getData();
  }

  getData() {
    this.selectedMetaTabSubscription = this.sharedService.selectedMetaTabChanged.subscribe(
      (tabsSelected: any) => {
        console.log("Received elements are ============> ", tabsSelected);
        this.tabsSelected = tabsSelected;
        console.log("Length inside : ", this.tabsSelected);
        this.updatePageData();
      }
    );
  }
  
  
  updatePageData() {
    this.response = {
      status: data.status,
      errorMessage: data.errorMessage,
      data: data.data // Accessing the data array directly from dummy.json
    };

    console.log("response," , this.response);

    if (this.response.status === 200) {
      this.dataSource.data = this.response.data;
      this.displayedColumns = Object.keys(this.dataSource.data[0]);
      // console.log("this.dataSource," , this.dataSource);
      // console.log("this.displayedColumns," , this.displayedColumns);

      // Add the hardcoded "Action" column
      // this.displayedColumns.push('action');

      // Add the "View" row value for each row in the data
      // this.dataSource.forEach((row:any) => {
      //   row['action'] = 'View';
      // });

      // Add the "View" icon for each row in the data
      // this.dataSource.forEach((row:any) => {
      //   row['action'] = 'visibility'; // Use the name of the Material icon you want to display
      // });

      this.totalItems = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator; // Set the paginator for proper handling
      this.updatePagedData();
    } else {
      this.errorMessage = this.response.errorMessage;
      // console.log("this.errorMessage : ",this.errorMessage);
    }
  }

  updatePagedData() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedData = this.dataSource.data.slice(startIndex, endIndex);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onFilterClear() {
    this.filterValue = '';
    this.dataSource.filter = '';
    this.input.nativeElement.value = '';
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }

  getTotalCount(){
    return this.tabsSelected.reduce((total : any,tab : any) => total + (tab.totalCount ? tab.totalCount : 0) ,0);
  }

  ngOnDestroy() {
    if (this.selectedMetaTabSubscription) {
      this.selectedMetaTabSubscription.unsubscribe();
    }
  }
}
