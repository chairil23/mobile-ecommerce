import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {OrderService} from "../../services/order-service";
import { ApiProvider } from '../../providers/api/api';
import {PembayaranPage} from '../../pages/pembayaran/pembayaran'

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html'
})
export class MyOrderPage {
  // sample data
  public orders: any;

  constructor(public nav: NavController, public orderService: OrderService, public apiProvider: ApiProvider) {
    // set sample data
    // this.orders = orderService.getAll();

    this.apiProvider.getTransaction().then(data => {
      this.orders = data;
      console.log(this.orders, 'my-order');
    }).catch(err => {
      console.log(err);
    })

  }
  
  pembayaran() {
    this.nav.push(PembayaranPage)
  }
  
}
