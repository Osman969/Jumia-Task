import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ApiServicesService } from 'src/app/services/api-services.service'

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css']
})
export class FilterationComponent implements OnInit {

  @Output() customersEmitter = new EventEmitter<Customer[]>();
  @Output() resetPageEmitter = new EventEmitter<number>();
  @Output() noCustomersEmitter = new EventEmitter<Customer[]>();


  phoneNumber: string = "";
  countryCode: string = "";
  phoneConcat: string = "";

  isFilterCountry: boolean = false;
  isFilterState: boolean = false;

  filterByCountryValue: string = "";
  filterByStateValue: string = "";
  customers: Customer[] =[];

  constructor(private _apiServicesService: ApiServicesService) {
  }

  ngOnInit(): void {
  }

  public filterByCountry(value: string) {

    this.isFilterCountry = true;
    this.filterByCountryValue = value;

    if(this.isFilterState === true){
      this.filterByCountryAndState(value, this.filterByStateValue);
    }
    
    else{
    this._apiServicesService.filterByCountry(value).subscribe(
      (response: any) => {
        this.resetPageEmitter.emit(1);
        this.customersEmitter.emit(response);
      }
    )
    }

  }

  public filterByState(value: string) {

    this.isFilterState = true;
    this.filterByStateValue = value;

    if(this.isFilterCountry === true){
      this.filterByCountryAndState(this.filterByCountryValue, value);
    }

    else{
    this._apiServicesService.filterByState(value).subscribe(
      (response: any) =>{
        this.resetPageEmitter.emit(1);
        this.customersEmitter.emit(response);
      } 
    )
  }

}

  onSubmit(form : HTMLFormElement) {

    let code = form.CountryCode;
    let number = form.phoneNumber;

    this.phoneConcat = "("+code+") "+number;
    this._apiServicesService.filterByPhoneNumber(this.phoneConcat).subscribe(
      (response: any) => 
                         {
                          this.customers = response; 
                          if(this.customers.length === 0){
                            this.noCustomersEmitter.emit(response);
                            this.resetPageEmitter.emit(0);
                          }
                          else{
                            this.resetPageEmitter.emit(1);
                            this.customersEmitter.emit(response);
                          }
                        }
      )  
  }

  filterByCountryAndState(country: string, state: string){

    this._apiServicesService.filterByCountryAndState(country, state).subscribe(
      (response: any) => {
        this.resetPageEmitter.emit(1);
        this.customersEmitter.emit(response);
      }
    )

  }


}
