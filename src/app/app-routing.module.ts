import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Questionnaire1Component } from './components/questionnaire1/questionnaire1.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { ReadyComponent } from './components/ready/ready.component';
import { Register1Component } from './components/register1/register1.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { ConsoleComponent } from './components/supervisor/console/console.component';
import { UsersProgressComponent } from './components/users-progress/users-progres.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register1', component: Register1Component },
  { path: 'register2', component: Register2Component },
  { path: 'register3', component: Register3Component },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'questionnaire1', component: Questionnaire1Component },
  { path: 'questionnaire2', component: Questionnaire2Component },
  { path: 'ready', component: ReadyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'progress', component: UsersProgressComponent },
  { path: 'console', component: ConsoleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
