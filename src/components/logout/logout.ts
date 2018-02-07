import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  text: string;

  constructor(public homePage: HomePage, public storage: Storage, public nav: NavController) {
   this.storage.remove('api_token').then(() => {
     this.storage.remove('user_id').then(() => {
       this.nav.push(HomePage)
     })
   })
  }

}
