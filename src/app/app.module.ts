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
    ReadMorePopupComponent
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
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
