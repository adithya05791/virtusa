import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing-module';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { Grades } from './grades/grades';
import { Attendance } from './attendance/attendance';
import { Timetable } from './timetable/timetable';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    StudentDashboard,
    Grades,
    Attendance,
    Timetable
  ]
})
export class StudentModule { }