import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../guards/role-guard';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { UploadMarks } from './upload-marks/upload-marks';
import { TakeAttendance } from './take-attendance/take-attendance';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: TeacherDashboard,
    canActivate: [RoleGuard],
    data: { roles: ['Teacher'] }
  },
  {
    path: 'marks',
    component: UploadMarks,
    canActivate: [RoleGuard],
    data: { roles: ['Teacher'] }
  },
  {
    path: 'attendance',
    component: TakeAttendance,
    canActivate: [RoleGuard],
    data: { roles: ['Teacher'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }