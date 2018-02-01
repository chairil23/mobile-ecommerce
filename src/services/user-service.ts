// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';

// //let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
// let apiUrl = 'http://localhost:8000/api/auth/';
// /*
//   Generated class for the AuthService provider.
//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.
// */
// @Injectable()
// export class UserService {

//   constructor(public http: Http) {
//     console.log('Hello AuthService Provider');
//   }

//   postData(credentials, type){

//     return new Promise((resolve, reject) =>{
//       let headers = new Headers();
//       this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
//       subscribe(res =>{
//         resolve(res.json());
//       }, (err) =>{
//         reject(err);
//       });

//     });

//   }

// }

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost:8000/api/auth/';

@Injectable()
export class UserService {

  constructor(public http: Http) {
    console.log('Auth Sukses');
  }


  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'register', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}