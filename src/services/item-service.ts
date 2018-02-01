import {Injectable} from "@angular/core";
import {ITEMS} from "./mock-items";
import { Http, Response } from "@angular/http";

let apiUrl = 'http://localhost:8000/api/';

@Injectable()
export class ItemService {
  private items: any;
  constructor(public http: Http) {
    // this.items = ITEMS;
    
  }

  getAll() {
    return this.http.get(apiUrl+'subcategory/')
         .map((response:Response)=>response.json());
  }

  // getAll() {
  //   return this.items;
  // }

  getByCategory(catId) {
    let items = [];

    for (let i = 0; i < ITEMS.length; i++) {
      if (ITEMS[i].category_id == catId) {
        items.push(ITEMS[i]);
      }
    }

    return items;
  }

  getItem(id) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === parseInt(id)) {
        return this.items[i];
      }
    }
    return null;
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
// import { Injectable } from '@angular/core';
// import { Http, Response } from "@angular/http";
// import 'rxjs/add/operator/map';
// // import {CATEGORIES} from "./mock-categories";
// let apiUrl = 'http://localhost:8000/api/';

// @Injectable()
// export class ItemService {

//   constructor(public http: Http) {
//      console.log('Hello Subcategory Provider');
//   }


//  getSubcategory(id){
//         return this.http.get(apiUrl+'subcategory/'+id)
//          .map((response:Response)=>response.json());
//  }
// }