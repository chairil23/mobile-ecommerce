import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ShareProvider } from '../share/share';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  apiUrl = 'http://localhost:8000/api';
  user = {user_id: '', api_token: ''}
  

  constructor(public http: HttpClient, private storage: Storage, public share: ShareProvider) {
    
  }

  doLogin(form) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login', JSON.stringify(form))
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
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

  postToCart(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/item', JSON.stringify(data), {
        headers: {'Authorization': 'Bearer '+ this.share.user.api_token,
        'Content-Type': 'application/json'}
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }

  getCart() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/item', {
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    });
  }

  order(form) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/order', form, {
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  getTransaction() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/transaction', {
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  shipping(kurir) {
    return new Promise((resolve, reject) => {
      this.http.get('/cost'+kurir, {
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  messageList () {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/messages',{
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    }) 
  }
  message(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/messages/'+id, {
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }
  sendMessage(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/sendmessage', data, { 
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
  deleteItem(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/item/'+id, {
        headers: {
          'Authorization': 'Bearer '+ this.share.user.api_token,
          'Content-Type': 'application/json'
        }
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}
