import { ApiService } from './../_services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})

export class RequestAddComponent implements OnInit {

  requestAddForm: FormGroup;
  submitted = false;
  errormsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.requestAddForm = this.formBuilder.group({
      id: [''],
      category: ['', [Validators.required, Validators.maxLength(25)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      status: ['']
    });
  }

  get f() { return this.requestAddForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.requestAddForm.invalid) {
      return;
    }

    this.apiService.addRequest(this.requestAddForm.value)
      .subscribe(
        data => {
          console.log(data);
          alert('Success');
          this.requestAddForm.reset();
          this.submitted = false;
        },
        error => {
          console.log(error);
          alert('Failure');
        });

  }

  cancel() {
    this.requestAddForm.reset();
  }

}
