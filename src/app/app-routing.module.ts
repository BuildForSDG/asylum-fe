import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordInitComponent } from './auth/reset-password/init/reset-password-init.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-init', component: ResetPasswordInitComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'patient', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
