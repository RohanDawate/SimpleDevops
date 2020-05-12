import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errormsg = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  LoginUser() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const user = this.loginForm.get('username').value;
    const pwd = this.loginForm.get('password').value;
    const output = this.authService.login(user, pwd);

    if (output === true) {
      this.router.navigate(['request-list']);
    } else {
      this.errormsg = 'Invalid credentials';
    }

  }

  cancel() {
    this.loginForm.reset();
  }

  gotohome() {
    this.router.navigate(['']);
  }

}
