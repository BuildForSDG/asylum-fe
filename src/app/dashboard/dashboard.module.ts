import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { IconsModule } from '../shared/icons/icons.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    IconsModule,
    DashboardRoutingModule,
    RouterModule
  ],
  declarations: [DashboardComponent, ProfileComponent],
  exports: [DashboardComponent, ProfileComponent]
})
export class DashboardModule { }
