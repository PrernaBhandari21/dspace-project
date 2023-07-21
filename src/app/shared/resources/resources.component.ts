import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import sideMenuContent from '../../../assets/sideMenuContent.json';
import { MatDialog } from '@angular/material/dialog';
import { ReadMorePopupComponent } from 'src/app/resources/read-more-popup/read-more-popup.component';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  constructor(private authService:AuthService,
    private matDialog : MatDialog,
    private sharedService : SharedService ){}
    
  resources : any;
  ngOnInit(): void {
    console.log("sideMenuContent: ", sideMenuContent);

    // Find the object with tab === 'Search By'
    const navElements: any[] = sideMenuContent?.navElements;
    const tabObject = navElements.find((element) => element.tab === 'Search By');

    if (tabObject) {
      // Access the metaTab property of the 'Search By' object
      const metaTab = tabObject.metaTab;
      console.log("metaTab: ", metaTab);
      this.resources = metaTab
      console.log(metaTab[0].info.length);
    } else {
      console.log("No 'Search By' element found.");
    }
  }



  // resources: any[] = [
  //   {
  //     title: 'Case Type',
  //     imagePath: 'https://img.freepik.com/free-photo/truth-concept-arrangement-with-balance_23-2149051293.jpg?size=626&ext=jpg&ga=GA1.2.1546609238.1679454714&semt=sph',
  //     data: 'Sample paragraph for the Search resource lorem ipsum Sample paragraph for the Search resource lorem ok yayyyyyyyyyyyyyyyyyyyy'
      
  //   },
  //   {
  //     title: 'Petitioner / Responsdent',
  //     imagePath: 'https://img.freepik.com/free-photo/reading-concept-with-pile-books_23-2147690501.jpg?w=360&t=st=1689327095~exp=1689327695~hmac=4a0932cee399164b8b0a0ef4f36d4ac6e4717566011dccf0ceaf8dae1bbd886e',
  //     data: 'Sample paragraph for Resource 2.'
  //   },
  //   {
  //     title: 'Date Of Final Order',
  //     imagePath: 'https://img.freepik.com/free-photo/colorful-books-wooden-table_23-2147850024.jpg?w=1060&t=st=1689327363~exp=1689327963~hmac=0b4da68eed9e5c3f5679c64af6dc3aebec3cda000087a51e3388c8e1385e9736',
  //     data: 'Sample paragraph for Resource 3.'
  //   },
  //   {
  //     title: 'Judge(s)',
  //     data: 'Sample paragraph for Resource 4.'
  //   },
  //   {
  //     title: 'Keywords',
  //     data: 'Sample paragraph for Resource 4.'
  //   },
  //   {
  //     title: 'Free Text',
  //     data: 'Sample paragraph for Resource 4.'
  //   }
  // ];

  async openContent(resource:any){
    console.log("Resource clicked : ",resource);
    const tabSelected:any = [];
    tabSelected.push(resource)
    this.sharedService.emitSelectedMetaTab(tabSelected);

    //enter if logged in !!
    this.login();


  }

  login(){
    this.authService.login();
  }

  readMore(resource : any){
    console.log("READ MORE : ", resource);
    this.matDialog.open(ReadMorePopupComponent,{
      'width' : '40%',
      data:resource
    })
  }

 
}
