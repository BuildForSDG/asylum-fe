import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { IconsModule } from '../shared/icons/icons.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SpecialistsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IconsModule
  ]
})
export class DashboardModule { }
