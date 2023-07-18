import { Component } from '@angular/core';
import { propertyFile } from 'propertyFile';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  constructor(private sharedService: SharedService) {}

  navElements = propertyFile?.navElements; 

  toggleExpansionPanel(navElement: any) {
    navElement.expanded = !navElement.expanded;
  
    // Collapse other panels when one is expanded
    this.navElements.forEach((element) => {
      if (element !== navElement) {
        element.expanded = false;
      }
    });
  }

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

  checkCheckbox(navElement: any, metaTab: any) {
   this.toggleCheckbox(navElement,metaTab);

  }
  
}