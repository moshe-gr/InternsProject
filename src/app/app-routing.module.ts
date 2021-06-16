import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Questionnaire1Component } from './components/intern/questionnaire1/questionnaire1.component';
import { Questionnaire2Component } from './components/intern/questionnaire2/questionnaire2.component';
import { ReadyComponent } from './components/intern/ready/ready.component';
import { Register1Component } from './components/register1/register1.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { ConsoleComponent } from './components/supervisor/console/console.component';
import { UsersProgressComponent } from './components/intern/users-progress/users-progres.component';
import { WelcomeComponent } from './components/intern/welcome/welcome.component';
import { Role } from './enums/role.enum';
import { RoleGuard } from './guards/role.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register1', component: Register1Component },
  { path: 'register2', component: Register2Component, canActivate: [UserGuard] },
  { path: 'register3', component: Register3Component, canActivate: [UserGuard] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [UserGuard] },
  { path: 'questionnaire1', component: Questionnaire1Component, canActivate: [UserGuard] },
  { path: 'questionnaire2', component: Questionnaire2Component, canActivate: [UserGuard] },
  { path: 'ready', component: ReadyComponent, canActivate: [UserGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'progress', component: UsersProgressComponent, canActivate: [UserGuard] },
  { path: 'console', component: ConsoleComponent, canActivate: [RoleGuard], data: { expectedRole: Role.supervisor } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
