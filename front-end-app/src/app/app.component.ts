import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front-end-app';

  filteredCustomers: any;
  page: any;
  noCustomers: any;

  onCustomersFiltered(filteredCustomersEmited: any) {
    this.filteredCustomers = filteredCustomersEmited;
  }

  onResetPage(value: any) {
    this.page = value;
  }

  checkNoUsers(value: any){
    this.noCustomers = value;
  }

}
