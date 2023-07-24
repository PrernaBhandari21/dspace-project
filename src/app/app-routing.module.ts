import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { LoginComponent } from './shared/login/login.component';
import { AboutComponent } from './main-components/about/about.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { TabularDataComponent } from './shared/tabular-data/tabular-data.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';

const routes: Routes = [
  // {path:'',
  // component:MainContentComponent  
  // },
  // {path:'',
  // component:TabularDataComponent  
  // },

  {
    path:'',
    component:HomePageComponent,
     data: { hideMiddleContent : true } 
  },
  {
    path:"login",
    component:LoginComponent,
    data: { hideMiddleContent : true } 
  },
  {
    path:"about",
    component:AboutComponent,
    data: { hideMiddleContent : true } 
  },
  {
    path:"sign-up",
    component:SignUpComponent,
    data: { hideMiddleContent : true } 
  },
  {
    path:"tabular-data",
    component:TabularDataComponent,
    },

  // {
  //   path:"home-page",
  //   component:HomePageComponent,
  //    data: { hideMiddleContent : true } 
  // }

  {
    path:"admin-dashboard", 
    component:DashboardComponent
  },
  {
    path:"admin-user-management", 
    component:UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
