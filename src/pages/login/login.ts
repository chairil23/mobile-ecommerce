import {Component} from '@angular/core';
import {NavController, LoadingController, ToastController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {UserService} from "../../services/user-service";
import {HomePage} from '../home/home';
// import {MyApp} from '../../app/app.component'
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import { Storage } from '@ionic/storage';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = { email:'', password:'' };
  data: any;

constructor(public nav: NavController, public userService: UserService, 
  public loadingCtrl: LoadingController, private toastCtrl: ToastController,
  private storage: Storage) {}
  ionViewDidLoad() {
    console.log('VIew Login Sukses');
  }
doLogin() {
    this.showLoader();
    this.userService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;

      // this.storage.set('user_id', this.data.user_id);
      // this.storage.set('token', this.data.api_token);
      // let token;
      // this.storage.get('token').then((val) => {
      //   console.log(val);
      //   token = val;
      //   console.log(token, 'wew');
      // })
      
      
      
      localStorage.setItem('token', this.data.api_token);
      localStorage.setItem('user_id', this.data.id)
      this.nav.setRoot(HomePage);
      console.log('Berhasil Masuk');
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  // go to register page
  register(){
    this.nav.push(RegisterPage);
  }

   // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
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
}

// import {Component} from '@angular/core';
// import {NavController, ToastController } from 'ionic-angular';
// import {MyApp} from '../../app/app.component';
// import {UserService} from '../../services/user-service';
// /**
//  * Generated class for the Login page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */

// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
  
//   resposeData : any;
//   userData = {"email":"", "password":""};

//   constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl:ToastController) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad Login');
//   }

//   login(){
//    if(this.userData.email && this.userData.password){
//     this.userService.postData(this.userData, "login").then((result) =>{
//     this.resposeData = result;
//     console.log(this.resposeData);
//     if(this.resposeData.userData){
//      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
//     this.navCtrl.push(MyApp);
//   }
//   else{
//     this.presentToast("Please give valid username and password");
//   }
    


//     }, (err) => {
//       //Connection failed message
//     });
//    }
//    else{
//     this.presentToast("Give username and password");
//    }
  
//   }


//   presentToast(msg) {
//     let toast = this.toastCtrl.create({
//       message: msg,
//       duration: 2000
//     });
//     toast.present();
//   }

// }
