import { ResetPasswordFinishComponent } from './reset-password/finish/reset-password-finish.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordInitComponent } from './reset-password/init/reset-password-init.component';
const components = [
  LoginComponent,
   RegisterComponent,
   ChangePasswordComponent,
   ResetPasswordInitComponent,
   ResetPasswordFinishComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [components ],
  exports: [components]
})
export class AuthModule { }
