import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private authService : AuthService,private route : Router){}

  login() {
    this.authService.login();
    this.route.navigate([""])
  }

  signUp(){
    this.route.navigate(['sign-up'])
  }
}
