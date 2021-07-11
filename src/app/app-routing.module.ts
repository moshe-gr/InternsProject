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
import { WelcomeComponent } from './components/intern/welcome/welcome.component';
import { Role } from './enums/role.enum';
import { RoleGuard } from './guards/role.guard';
import { UserGuard } from './guards/user.guard';
import { UserOverviewComponent } from './components/intern/user-overview/user-overview.component';
import { TestsComponent } from './components/supervisor/tests/tests.component';
import { ToMarkComponent } from './components/supervisor/to-mark/to-mark.component';
import { PracticeResultsComponent } from './components/intern/practice-results/practice-results.component';

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
  { path: 'overview', component: UserOverviewComponent, canActivate: [UserGuard] },
  { path: 'console', component: ConsoleComponent, canActivate: [RoleGuard], data: { expectedRole: Role.supervisor } },
  { path: 'updatePersonal', component: Questionnaire1Component, canActivate: [UserGuard] },
  { path: 'updateProfessional', component: Questionnaire2Component, canActivate: [UserGuard] },
  { path: 'updateImg', component: Register3Component, canActivate: [UserGuard] },
  { path: 'authLogin', component: Register2Component, canActivate: [UserGuard] },
  { path: 'tests', component: TestsComponent, canActivate: [RoleGuard], data: { expectedRole: Role.supervisor } },
  { path: 'toMark', component: ToMarkComponent, canActivate: [RoleGuard], data: { expectedRole: Role.supervisor } },
  { path: 'results', component: PracticeResultsComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
