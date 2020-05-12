import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NegateauthGuard implements CanActivate {

  key: 'isLoggedIn';

  constructor(private routes: Router) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (localStorage.getItem(this.key) == null) {
        return true;
      } else {
        alert('This functionality is only allowed for non-admin users');
        this.routes.navigate(['']);
        return false;
      }
  }

}
