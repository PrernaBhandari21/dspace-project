import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dspace';
  userLoggedIn : boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userLoggedIn$.subscribe((loggedIn: boolean) => {
      this.userLoggedIn = loggedIn;
    });
  }
}

