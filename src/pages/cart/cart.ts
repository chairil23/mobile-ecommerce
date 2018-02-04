import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {CartService} from '../../services/cart-service';
import {OrderConfirmPage} from "../order-confirm/order-confirm";
import { ApiProvider } from '../../providers/api/api';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  public cart: any;
  public _total: number;
  public _subtotal: any;
  // public kurir: string;

  items= [
    {
      code: 'tiki',
      name: 'Citra Van Titipan Kilat (TIKI)'
    },
    {
      code: 'jne',
      name: 'Jalur Nugraha Ekakurir (JNE)'
    },
    {
      code: 'pos',
      name: 'POS Indonesia (POS)'
    }
  ]
  kurir= 'jne'
  service= {
    cost: [
      {
        value: '',
        etd: '',
        note: ''
      }
    ],
    service: '',
    descriptions: ''
  }
  jKurir: any;

  constructor(public nav: NavController, public cartService: CartService, public apiProvider: ApiProvider) {
    // set cart data
    // this.cart = cartService.getAll();
    this.apiProvider.getCart().then((data) => {
      this.cart = data;
      this.subTotal = this.subTotal;
      console.log(data, 'cart');
    }).catch((err) => {
      console.log(err);
    });
    this.getCart();
  }

  getCart() {
    console.log('getcart')
  }

  // remove item
  remove(itemIndex) {
    this.cart.splice(itemIndex, 1);
  }

  // place order
  buy() {
    this.nav.setRoot(OrderConfirmPage, {cart: this.cart});
  }

  subTotal() {
    let total;
    this.cart.forEach(element => {
      total = total + (element.harga_awal * element.kuantitas)      
    });
    this._subtotal = total;
  }

  total() {
    this._total = this._subtotal + 20000;
    
  }

    // getShipping() {
    //   this.apiProvider.shipping(this.kurir).then(data => {
    //     this.service = data
    //   })
    // }
}
