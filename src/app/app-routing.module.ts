import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Register1Component } from './components/register1/register1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: Register1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
