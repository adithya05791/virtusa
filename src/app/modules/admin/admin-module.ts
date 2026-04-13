import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { UserManagement } from './user-management/user-management';
import { Reports } from './reports/reports';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminDashboard,
    UserManagement,
    Reports
  ]
})
export class AdminModule { }