import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisordersComponent } from './disorders/disorders.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DisordersComponent },
      { path: 'specialists', component: DoctorListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
