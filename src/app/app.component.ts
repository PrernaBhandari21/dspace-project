import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dspace';
  userLoggedIn : boolean = true;
  hideMiddleContent!: boolean;

  constructor(private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    async ngOnInit() {
      this.checkRoute();
      this.authService.userLoggedIn$.subscribe((loggedIn: boolean) => {
        this.userLoggedIn = loggedIn;
      });
    }
  
    checkRoute(): void {
      console.log("checking route...");
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const routeData = this.activatedRoute.firstChild?.snapshot.data;
          console.log("routeData : ",routeData);
          this.hideMiddleContent = routeData?.["hideMiddleContent"];
        }
      });
    }
}

