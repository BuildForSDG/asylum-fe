import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { IconsModule } from '../shared/icons/icons.module';
import { ListThumbnailComponent } from './specialists/list-thumbnail/list-thumbnail.component';
import { SpecialistsDetailsComponent } from './specialists/specialists-details/specialists-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SpecialistsComponent,
    ListThumbnailComponent,
    SpecialistsDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
