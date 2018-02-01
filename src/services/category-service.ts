import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
// import {CATEGORIES} from "./mock-categories";
let apiUrl = 'http://localhost:8000/api/';

@Injectable()
export class CategoryService {

  constructor(public http: Http) {
     console.log('Hello Category Provider');
  }


 getMenu(){
        return this.http.get(apiUrl+'categories')
         .map((response:Response)=>response.json());
 }

//  getSub(id) {
//   return this.http.get(apiUrl+'subcategory/'id)
//   .map((response:Response)=>response.json());
//  }


  // getAll() {
  //   return this.CATEGORIES;
  // }

  // getItem(id) {
  //   for (var i = 0; i < this.CATEGORIES.length; i++) {
  //     if (this.CATEGORIES[i].id === parseInt(id)) {
  //       return this.CATEGORIES[i];
  //     }
  //   }
  //   return null;
  // }

  // remove(item) {
  //   this.CATEGORIES.splice(this.CATEGORIES.indexOf(item), 1);
  // }
}

