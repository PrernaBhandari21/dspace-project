import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {

  constructor(private authService:AuthService){}

  resources: any[] = [
    {
      title: 'Resource 1',
      imagePath: 'https://img.freepik.com/free-photo/truth-concept-arrangement-with-balance_23-2149051293.jpg?size=626&ext=jpg&ga=GA1.2.1546609238.1679454714&semt=sph',
      data: 'Sample paragraph for the Search resource lorem ipsum Sample paragraph for the Search resource lorem ok yayyyyyyyyyyyyyyyyyyyy'
    
    },
    {
      title: 'Resource 2',
      imagePath: 'https://img.freepik.com/free-photo/reading-concept-with-pile-books_23-2147690501.jpg?w=360&t=st=1689327095~exp=1689327695~hmac=4a0932cee399164b8b0a0ef4f36d4ac6e4717566011dccf0ceaf8dae1bbd886e',
      data: 'Sample paragraph for Resource 2.'
    },
    {
      title: 'Resource 3',
      imagePath: 'https://img.freepik.com/free-photo/colorful-books-wooden-table_23-2147850024.jpg?w=1060&t=st=1689327363~exp=1689327963~hmac=0b4da68eed9e5c3f5679c64af6dc3aebec3cda000087a51e3388c8e1385e9736',
      data: 'Sample paragraph for Resource 3.'
    },
    {
      title: 'Resource 4',
      imagePath: 'path-to-image',
      data: 'Sample paragraph for Resource 4.'
    },
    {
      title: 'Resource 4',
      imagePath: 'path-to-image',
      data: 'Sample paragraph for Resource 4.'
    },
    {
      title: 'Resource 4',
      imagePath: 'path-to-image',
      data: 'Sample paragraph for Resource 4.'
    }
  ];

  openContent(resource:any){
    console.log("Resource clicked : ",resource);
    //enter if logged in !!
    this.login();
  }

  login(){
    this.authService.login();
  }


 
}
