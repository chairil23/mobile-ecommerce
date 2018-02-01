import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  apiUrl = 'http://localhost:8000/api';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  
  getSubProduct(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/subcategory/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  getProduct(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/productlist/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err)
        })
    })
  }

}
