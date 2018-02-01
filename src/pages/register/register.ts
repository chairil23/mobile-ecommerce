import {Component} from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {UserService} from '../../services/user-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  loading: any;
  regData = { name:'', password:'', email:'' };

constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public loadingCtrl: LoadingController, private toastCtrl: ToastController)  {}
ionViewDidLoad() {
    console.log('VIew Register Sukses');
  }
  doSignup() {
    this.showLoader();
    this.userService.register(this.regData).then((result) => {
      this.loading.dismiss();
      this.navCtrl.pop();
         console.log('Berhasil Daftar');
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  // go to login page
  login() {
    this.navCtrl.push(LoginPage);
  }

}


