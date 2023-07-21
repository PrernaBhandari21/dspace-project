import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService : AuthService,
    private route : Router){}

  logout() {
    // this.authService.logout();

    this.route.navigate([""])
  }

  login(){
    console.log("navigate");
    this.route.navigate(["login"])
  }

  openAboutPage(){
    this.route.navigate(["about"])
  }
}
