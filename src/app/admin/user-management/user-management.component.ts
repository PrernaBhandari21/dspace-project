import { Component, ViewChild } from '@angular/core';
import dataSource from '../../../assets/users-data.json';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AddUserComponent } from './add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  searchQuery: string = ''; 
  selectedStatus: string = 'all';
  selectedGroup: string = 'all';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pagedDataSource: any[] = [];

  displayedColumns: string[] = [
    'first Name',
    'last Name',
    'email',
    'last Login',
    'active Since',
    'membership Validity',
    'group',
    'status',
    'password Reset',
    'edit'
  ];

  constructor(private dialog : MatDialog){}

  pageSize = 10; 
  currentPage = 0; 
  dataSource: any[] = dataSource;
  filteredDataSource: any[] = [];

  ngOnInit(): void {
    this.dataSource = dataSource;

    // Use setTimeout to ensure the filteredDataSource is set before filtering
    setTimeout(() => {
      this.filterData();
    });
  }


filterData(): void {

  console.log("called");
  // Step 1: Apply filtering
  this.filteredDataSource = this.dataSource.filter((element) => {
    const statusFilter = this.selectedStatus === 'all' || element['status'] === this.selectedStatus;
    const groupFilter = this.selectedGroup === 'all' || element['group'] === this.selectedGroup;
    const searchFilter = this.searchQuery === '' || this.containsSearchTerm(element, this.searchQuery);
    return statusFilter && groupFilter && searchFilter;
  });

  // Step 2: Update the paginator properties
  this.paginator.pageIndex = 0; // Reset the pageIndex to the first page
    this.paginator.length = this.filteredDataSource.length;
    this.currentPage = 0;

  // Step 3: Apply pagination
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.pagedDataSource = this.filteredDataSource.slice(startIndex, endIndex);
}

  
onPageChanged(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.pagedDataSource = this.filteredDataSource.slice(startIndex, endIndex);
}


  containsSearchTerm(element: any, searchTerm: string): boolean {
    searchTerm = searchTerm.toLowerCase();
    return Object.keys(element).some((key) => {
      const value = String(element[key]).toLowerCase();
      return value.includes(searchTerm);
    });
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '687px', 
      height:'507px'
       });

    dialogRef.afterClosed().subscribe((result: any) => {
      // Handle the result returned from the dialog if needed
      if (result === true) {
        // User clicked Save
        // Perform any necessary actions here
      } else {
        // User clicked Cancel or clicked outside the dialog
      }
    });
  }

  editUser(element:any){
    console.log("Element is : ",element);
    this.dialog.open(EditUserComponent, {
      data:element,
      height:"500px"
    })
  }

  resetPassword(element : any){
    this.dialog.open(ResetPasswordComponent,{
      data:element,
      height:"300px"
    })
  }

}
