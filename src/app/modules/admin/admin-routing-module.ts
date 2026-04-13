import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../guards/role-guard';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { UserManagement } from './user-management/user-management';
import { Reports } from './reports/reports';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AdminDashboard,
    canActivate: [RoleGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'users',
    component: UserManagement,
    canActivate: [RoleGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'reports',
    component: Reports,
    canActivate: [RoleGuard],
    data: { roles: ['Admin'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }