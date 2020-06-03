import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisordersComponent } from './disorders/disorders.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

const routes: Routes = [
  { path: '', component: DisordersComponent },
  { path: 'specialists', component: DoctorListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
