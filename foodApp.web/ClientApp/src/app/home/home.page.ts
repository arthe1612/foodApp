import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController, IonNavPush, NavController } from '@ionic/angular';
import {InfosPage} from '../infos/infos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  infosPage = InfosPage;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, public toastController: ToastController) { }

  getDataFromQRCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.navCtrl.navigateForward('infos/'+ barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
