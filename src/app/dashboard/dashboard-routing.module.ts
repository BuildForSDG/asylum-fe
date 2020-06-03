import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SpecialistsComponent } from './specialists/specialists.component';


const routes: Routes = [
  { path: 'account', component: ProfileComponent },
  { path: 'specialists', component: SpecialistsComponent },
  { path: '', redirectTo: 'account', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
