import { Component, OnInit } from '@angular/core';
import { propertyFile } from 'propertyFile';
import { SharedService } from 'src/app/services/shared.service';
import sideMenuContent from '../../../assets/sideMenuContent.json';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  userRole!: string;

  constructor(private sharedService: SharedService,
    private authService: AuthService) {}

    navElements: any[] = []; 
    tabsSelected: any[] = [];

    adminNavElements : any[] = [
      {elementName : "Dashboard", elementLink : "admin-dashboard"},
      {elementName : "User Management", elementLink : "admin-user-management"},
      {elementName : "User Data Upload", elementLink : "admin-user-data-upload"},
      {elementName : "Reports", elementLink : "admin-reports"},
    ]

    ngOnInit(): void {
      this.userRole = this.authService.role;
      console.log("Got role as ==>", this.userRole);
  
      if (this.userRole !== 'admin') {
        // Initialize everything for non-'admin' users
        this.navElements = sideMenuContent?.navElements;
        this.tabsSelected = [];
      } else {
        // For 'admin' users, show admin content

      }
    }

  // navElements = propertyFile?.navElements; 



  // navElements = sideMenuContent?.navElements;
  // tabsSelected : any = [];



  //checkk
  // tabsSelected :any =[{"imagePath"
  //   : 
  //   "https://img.freepik.com/free-photo/truth-concept-arrangement-with-balance_23-2149051293.jpg?size=626&ext=jpg&ga=GA1.2.1546609238.1679454714&semt=sph",
  //   info
  //   : 
  //   "Search cases based on their types for efficient case handling and organization.",
  //   link
  //   : 
  //   "/searchBy-case-type",
  //   selected
  //   : 
  //   true,
  //   tab
  //   : 
  //   "Case Type",
  //   totalCount
  //   : 
  //   11}];

  toggleExpansionPanel(navElement: any) {
    navElement.expanded = !navElement.expanded;
  

    console.log("finally navElements are : ",this.navElements);

    console.log("object");

    // Collapse other panels when one is expanded
    this.navElements.forEach((element) => {
      if (element !== navElement) {
        element.expanded = false;
      }
    });
  }


// If we want to click single checkbox at a time ==>
  toggleCheckbox(navElement: any, metaTab: any) {
    // Deselect other checkboxes when one is selected
    navElement.metaTab.forEach((tab:any) => {
      if (tab !== metaTab) {
        tab.selected = false;
      }
    });
    // Toggle the selected state of the clicked checkbox
    console.log(metaTab);
    //select meta tab 
    this.sharedService.emitSelectedMetaTab(metaTab);

    metaTab.selected = !metaTab.selected;
  }


  // For multiple selected of checkboxes !
  // toggleCheckbox(navElement: any, metaTab: any) {
  //   // Check if metaTab is already selected
  //   const index = this.tabsSelected.indexOf(metaTab);
  
  //   if (index !== -1) {
  //     // If metaTab is already selected, remove it from the array
  //     this.tabsSelected.splice(index, 1);
  //     metaTab.selected = false; // Update the selected state of the metaTab
  //   } else {
  //     // If metaTab is not selected, add it to the array
  //     this.tabsSelected.push(metaTab);
  //     metaTab.selected = true; // Update the selected state of the metaTab
  //   }
  
  //   // Emit the updated tabsSelected array
  //   this.sharedService.emitSelectedMetaTab(this.tabsSelected);
  // }
  


  // for opening data, from home page 
  // toggleCheckbox(navElement?: any, metaTab?: any) {
  //   console.log("Starting funxc.");

  //   console.log("this.tabsSelected ", this.tabsSelected);
  
  //   // Emit the updated tabsSelected array
  //   this.sharedService.emitSelectedMetaTab(this.tabsSelected);
  // }
  
  

  checkCheckbox(navElement: any, metaTab: any) {
   this.toggleCheckbox(navElement,metaTab);
  }
  
}