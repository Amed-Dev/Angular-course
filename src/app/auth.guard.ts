import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {

  const isAuthenticated = true;/* verifica si el usuario está autenticado */;
  return isAuthenticated;
};
