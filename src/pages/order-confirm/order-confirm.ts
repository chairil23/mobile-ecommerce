import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {CartService} from '../../services/cart-service';
import {HomePage} from "../home/home";
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider } from '../../providers/api/api';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html'
})
export class OrderConfirmPage {
  public cart: any;
  public temp: any;
  public order= {
    bank_id: 0,
    address: '',
    city_id: '',
    city_name: '',
    province: '',
    postal_code: '',
    kurir: '',
    service: '',
    biaya_kurir: '',
    items: []
  }


  constructor(public nav: NavController, public cartService: CartService, public navParam: NavParams,
  public apiProvider: ApiProvider) {
    // set cart data
    this.cart = navParam.get('cart');
    console.log(this.cart, 'placeorder');
  }

  // place order
  buy() {
    // back to home page
    this.temp = this.cart
    this.order = {
      bank_id: 1,
      address: 'JL. karakatau',
      city_id: '278',
      city_name: 'Medan',
      province: 'Sumatera Utara',
      postal_code: '22890',
      kurir: 'jne',
      service: 'REG',
      biaya_kurir: '20000',
      items: this.temp
    }
    
    this.apiProvider.order(this.order).then(data => {
      console.log(data);
      this.nav.setRoot(HomePage);
    }).catch(err => console.log(err));
    
  }
}
