import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { AccessDenied } from './components/access-denied/access-denied';
import { Layout } from './components/layout/layout';
import { AuthGuard } from './guards/auth-guard';
import { Signup } from './components/signup/signup';


export const routes: Routes = [

  // Public routes — no layout no guard
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'access-denied', component: AccessDenied },

  // Protected routes — wrapped in Layout
  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        loadChildren: () =>
          import('./modules/student/student-module')
            .then(m => m.StudentModule)
      },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./modules/teacher/teacher-module')
            .then(m => m.TeacherModule)
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/admin/admin-module')
            .then(m => m.AdminModule)
      }
    ]
  },

  { path: '**', redirectTo: '/login' }
];