import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {ItemService} from '../../services/item-service';
import {ModalItemOptionPage} from "../modal-item-option/modal-item-option";
import {ApiProvider} from "../../providers/api/api";
import { NavParams } from 'ionic-angular/navigation/nav-params';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  // item info
  public item: any;
  public id;
  public images: any;
   form= {
    product_id: '',
    kuantitas: '',
    jenis_kertas: '',
    model: '',
    kain: '',
    ukuran: '',
    warna: '',
    jenis_cetak: '',
    bahan: '',
    sisi: '',
    jilid: '',
    lembar: '',
    cetak_depan: '',
    cetak_belakang: '',
    cetak_lengan_kanan: '',
    cetak_lengan_kiri: '',
    kaos_metode: '',
    nama: '',
    nama_perusahaan: '',
    no_telpon: '',
    alamat: '',
    email: '',
    jabatan: '',
    material: '',
    logo: ''
  };
  finishing= [
    {text: 'Laminating Glossy'},
    {text: 'Embosse'}
  ]
    
  
  quantity: Array<Object>;
  jenis_kertas: Array<Object>;
  
  

  constructor(public nav: NavController, public itemService: ItemService, 
    public modalCtrl: ModalController, public apiProvider: ApiProvider, public navParams: NavParams) {
    // get the first item as sample data
    // this.item = itemService.getItem(1);
    this.quantity= [
      {text: 50},
      {text: 100}
    ]
  
    this.jenis_kertas= [
      {text: 'Standard'},
      {text: 'Extra Fancy'}
    ]
    this.id = navParams.get("id");

    this.getItem(this.id);
    this.form.product_id = this.id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

  onChange(){
    console.log(this.form.kuantitas);
  }

  addToCart() {
    this.apiProvider.postToCart(this.form).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  getItem(id) {
    this.apiProvider.getProduct(id).then(data =>{
      this.item = data;
      this.images = this.item.images;
      console.log(this.images);
    }).catch(err => {
      console.log(err);
    });
  }

  // add or remove item on wish list
  toggleWishList(item) {
    item.on_wish_list = !item.on_wish_list;
  }

  // get item options group name
  getOptionGroupsName(item) {
    let optionGroups = [];
    for (let i = 0; i < item.option_groups.length; i++) {
      optionGroups.push(item.option_groups[i].name);
    }

    return optionGroups.join(',');
  }

  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // open item option modal
  showOptions(item) {
    // show modal
    let modal = this.modalCtrl.create(ModalItemOptionPage, {item: item});

    // listen for modal close
    modal.onDidDismiss(confirm => {
      if (confirm) {
        // apply filter here
      } else {
        // do nothing
      }
    });

    modal.present();
  }
}
