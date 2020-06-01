import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule { }
