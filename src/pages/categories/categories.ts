import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import { CategoryPage } from '../category/category';
// import {CategoryPage} from '../category/category';
// import {CartPage} from "../cart/cart";
// import {StatusBar} from '@ionic-native/status-bar';
// import {SplashScreen} from '@ionic-native/splash-screen';
// import {Platform} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  // list of categories
public categories: any;
showLevel1 = null;
showLevel2 = null;

  constructor(public nav: NavController, public categoryService: CategoryService) {
    // this.categories = categoryService.getAll();

     this.categoryService.getMenu()
    .subscribe((response)=> {
        this.categories = response;
        console.log(this.categories);
    });
  }

  toggleLevel1(idx) {
  if (this.isLevel1Shown(idx)) {
    this.showLevel1 = null;
  } else {
    this.showLevel1 = idx;
  }
};
  viewSub(id) {
    this.nav.push(CategoryPage,{id: id})
  }

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  }

  // view category
  // viewCategory(categoryId) {
  //   this.nav.push(CategoryPage, {id: categoryId});
  // }

  // view cart
  // goToCart() {
  //   this.nav.setRoot(CartPage);
  // }

