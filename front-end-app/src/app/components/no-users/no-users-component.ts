import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-no-users',
  templateUrl: './no-users-component.html',
  styleUrls: ['./no-users-component.css']
})

export class NoUsersComponent implements OnInit {

  @Input() users: Customer[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
