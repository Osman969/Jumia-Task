import { Component, Input, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service'
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  @Input() users: Customer[] =[];

  @Input() page: number = 1;

  elements: number = 10;

  totalRecords: number = 0;

  config: any;

  constructor(private _apiServicesService: ApiServicesService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.users
    };
  }

  ngOnInit(): void {
    this.showUsers();

  }

  showUsers() {
    this.page = 1;
    this._apiServicesService.showAllUsers().subscribe(
      (response: any) => this.users = response
    );
  }

}
