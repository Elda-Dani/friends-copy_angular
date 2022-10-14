import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes :Routes=[
  {
    path:"",component:AddfriendsComponent
  },
  {
    path:"",component:ViewfriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddfriendsComponent,
    ViewfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
