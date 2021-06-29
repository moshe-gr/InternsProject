import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { Register1Component } from './components/register1/register1.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { WelcomeComponent } from './components/intern/welcome/welcome.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { Questionnaire1Component } from './components/intern/questionnaire1/questionnaire1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Questionnaire2Component } from './components/intern/questionnaire2/questionnaire2.component';
import { ReadyComponent } from './components/intern/ready/ready.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersProgressComponent } from './components/intern/users-progress/users-progres.component';
import { ConsoleComponent } from './components/supervisor/console/console.component';
import { UserCardComponent } from './components/supervisor/user-card/user-card.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserOverviewComponent } from './components/intern/user-overview/user-overview.component';
import { PracticeResultsComponent } from './components/intern/practice-results/practice-results.component';
import { TestsComponent } from './components/supervisor/tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginHeaderComponent,
    Register1Component,
    Register2Component,
    Register3Component,
    WelcomeComponent,
    ProfileHeaderComponent,
    Questionnaire1Component,
    Questionnaire2Component,
    ReadyComponent,
    LoginComponent,
    UsersProgressComponent,
    ConsoleComponent,
    UserCardComponent,
    UserProfileComponent,
    UserOverviewComponent,
    PracticeResultsComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
