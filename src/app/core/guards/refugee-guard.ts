import { CanActivateFn } from '@angular/router';

export const refugeeGuard: CanActivateFn = (route, state) => {
  return true;
};
