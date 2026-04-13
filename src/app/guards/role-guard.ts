import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth';

export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRoles = route.data['roles'] as string[];

  const userRole = authService.getRole();

  if (requiredRoles && requiredRoles.includes(userRole!)) {
    return true; 
  }

  router.navigate(['/access-denied']);
  return false; 
};