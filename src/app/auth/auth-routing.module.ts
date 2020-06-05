import { ResetPasswordFinishComponent } from './reset-password/finish/reset-password-finish.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPasswordInitComponent } from './reset-password/init/reset-password-init.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset-init', component: ResetPasswordInitComponent },
  {path: 'reset-finish', component: ResetPasswordFinishComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
