import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FreelancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-freelance',
  templateUrl: 'freelance.html',
})
export class FreelancePage {
  username= 'Rani';
  email= 'rani@mail.com';
  phone= '08964343434334';
  jk= 0;
  rekening: '9908099098097770';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreelancePage');
  }

}
