import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: 'patient', component: DashboardComponent,  children: [
  { path: '', redirectTo: 'patient', pathMatch: 'full' }]
}];


export const DashboardRoutes = RouterModule.forChild(routes);
