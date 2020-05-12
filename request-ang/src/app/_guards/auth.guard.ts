import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  key: 'isLoggedIn';

  constructor(private routes: Router) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (localStorage.getItem(this.key) != null) {
        return true;
      } else {
        alert('Kindly login to continue');
        this.routes.navigate(['']);
        return false;
      }
  }

}
