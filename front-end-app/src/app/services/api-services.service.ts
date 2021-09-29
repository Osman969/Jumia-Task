import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../app.constants';

@Injectable({providedIn: 'root'})
@Injectable({
  providedIn: 'root'
})

export class ApiServicesService {

  constructor(private httpClient: HttpClient) {
  }

  showAllUsers(){
    return this.httpClient.get(API_URL);
  }

  filterByCountry(country: string){
    return this.httpClient.get(API_URL+'?country='+country);
  }

    
  filterByState(state: string){
    return this.httpClient.get(API_URL+'?state='+state);
  }

  filterByPhoneNumber(phoneNumber: string){
    return this.httpClient.get(API_URL+'?number='+phoneNumber);
  }

  filterByCountryAndState(country: string, state: string){
    return this.httpClient.get(API_URL+'?country='+country+"&"+'state='+state);

  }

}
