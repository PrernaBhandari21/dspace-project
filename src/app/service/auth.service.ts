import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router){}

  role : string = "user";
  private userLoggedInSubject = new Subject<boolean>();
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  logout() {
    this.userLoggedInSubject.next(false);
  }

  login(){
    // this.userLoggedInSubject.next(true);
    if(this.role == 'admin'){
      this.router.navigate(["admin-dashboard"]);
    }else{
      this.router.navigate(["tabular-data"])
    }
    

  }
}
