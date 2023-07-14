import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { LoginComponent } from './main-components/login/login.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { ResourcesComponent } from './shared/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
    SidemenuComponent,
    MainContentComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
