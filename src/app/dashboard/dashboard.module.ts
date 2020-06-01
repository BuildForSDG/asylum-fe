import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { IconsModule } from '../shared/icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    IconsModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
