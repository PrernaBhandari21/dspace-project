import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';


import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { ResourcesComponent } from './shared/resources/resources.component';
import { AboutComponent } from './main-components/about/about.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { TabularDataComponent } from './shared/tabular-data/tabular-data.component';
import { ReadMorePopupComponent } from './resources/read-more-popup/read-more-popup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AddUserComponent } from './admin/user-management/add-user/add-user.component';
import { EditUserComponent } from './admin/user-management/edit-user/edit-user.component';
import { ResetPasswordComponent } from './admin/user-management/reset-password/reset-password.component';
import { UserDataUploadComponent } from './admin/user-data-upload/user-data-upload.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    SidemenuComponent,
    MainContentComponent,
    ResourcesComponent,
    AboutComponent,
    SignUpComponent,
    TabularDataComponent,
    ReadMorePopupComponent,
    DashboardComponent,
    UserManagementComponent,
    AddUserComponent,
    EditUserComponent,
    ResetPasswordComponent,
    UserDataUploadComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
