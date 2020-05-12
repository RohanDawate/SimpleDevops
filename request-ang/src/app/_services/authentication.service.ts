import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

const baseUrl = 'http://localhost:4500';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authKey: 'isLoggedIn';
  private loggedIn = new BehaviorSubject<boolean>(true);

  constructor(private router: Router,
              private http: HttpClient,
              private apiService: ApiService
  ) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  isAuthenticated() {
    return (localStorage.getItem(this.authKey) !== null);
  }

  login(user: string, pwd: string) {

    if (user.toLowerCase() === 'admin' && pwd === 'admin') {
      localStorage.setItem(this.authKey, 'true');
      return true;
    }
    return false;

  }

  logout() {
    localStorage.removeItem(this.authKey);
    this.router.navigate(['']);
  }

}
