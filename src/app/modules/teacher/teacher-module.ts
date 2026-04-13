import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing-module';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { UploadMarks } from './upload-marks/upload-marks';
import { TakeAttendance } from './take-attendance/take-attendance';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    TeacherDashboard,
    UploadMarks,
    TakeAttendance
  ]
})
export class TeacherModule { }