import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedInSubject = new Subject<boolean>();
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  logout() {
    this.userLoggedInSubject.next(false);
  }

  login(){
    this.userLoggedInSubject.next(true);
  }
}
