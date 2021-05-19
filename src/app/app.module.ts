import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Register1Component } from './components/register1/register1.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Register1Component,
    Register2Component,
    Register3Component,
    RegisterSuccessComponent,
    WelcomeComponent,
    ProfileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
