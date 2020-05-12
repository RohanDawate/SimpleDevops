import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../_services/api.service';
import { Request } from './../_model/Request';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {

  requestData: Request[];
  form: FormGroup;

  constructor(private api: ApiService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.api.getRequests().subscribe((data) => this.requestData = data);
  }

  approveRequest(req: Request) {
    req.status = 'Approved';
    this.api.updateRequest(req.id, req)
      .subscribe(
        data => {
          if (data) {
            this.reloadData();
          }
        },
        error => console.log(error));
  }

  rejectRequest(req: Request) {
    req.status = 'Rejected';
    this.api.updateRequest(req.id, req)
      .subscribe(
        data => {
          if (data) {
            this.reloadData();
          }
        },
        error => console.log(error));
  }

}
