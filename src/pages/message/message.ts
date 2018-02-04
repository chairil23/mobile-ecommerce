import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { MessageItemPage } from '../../pages/message-item/message-item'

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  public list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.apiProvider.messageList().then(data => {
      this.list = data;
    }).catch(err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  viewMessage(message) {
    this.navCtrl.push(MessageItemPage, {message: message})
  }
}
