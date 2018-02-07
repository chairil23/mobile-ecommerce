import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareProvider {
  public user: any;
  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello ShareProvider Provider');
  }

  

}
