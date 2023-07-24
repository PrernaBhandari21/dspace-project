import { Component } from '@angular/core';
import dataSource from '../../../assets/users-data.json';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  searchQuery: string = ''; 
  selectedStatus: string = 'all';
  selectedGroup: string = 'all';

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


  dataSource: any[] = dataSource;
  filteredDataSource: any[] = [];

 ngOnInit(): void {
    this.filterData();
  }


  filterData(): void {
    this.filteredDataSource = this.dataSource.filter((element) => {
      const statusFilter = this.selectedStatus === 'all' || element['status'] === this.selectedStatus;
      const groupFilter = this.selectedGroup === 'all' || element['group'] === this.selectedGroup;
      const searchFilter = this.searchQuery === '' || this.containsSearchTerm(element, this.searchQuery);
      return statusFilter && groupFilter && searchFilter;
    });
  }

  containsSearchTerm(element: any, searchTerm: string): boolean {
    searchTerm = searchTerm.toLowerCase();
    return Object.keys(element).some((key) => {
      const value = String(element[key]).toLowerCase();
      return value.includes(searchTerm);
    });
  }

}
