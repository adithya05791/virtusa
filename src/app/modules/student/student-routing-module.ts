import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../guards/role-guard';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { Grades } from './grades/grades';
import { Attendance } from './attendance/attendance';
import { Timetable } from './timetable/timetable';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: StudentDashboard,
    canActivate: [RoleGuard],
    data: { roles: ['Student'] }
  },
  {
    path: 'grades',
    component: Grades,
    canActivate: [RoleGuard],
    data: { roles: ['Student'] }
  },
  {
    path: 'attendance',
    component: Attendance,
    canActivate: [RoleGuard],
    data: { roles: ['Student', 'Teacher', 'Admin'] }
  },
  {
    path: 'timetable',
    component: Timetable,
    canActivate: [RoleGuard],
    data: { roles: ['Student', 'Teacher', 'Admin'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }