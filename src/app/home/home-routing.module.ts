import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisordersComponent } from './disorders/disorders.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DisordersComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
