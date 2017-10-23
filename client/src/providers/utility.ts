import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class Utility {

  constructor(public storage: Storage, public loadingCtrl: LoadingController) {}

//Show/hide loading
  getLoader() : any{
    let loader = this.loadingCtrl.create({
      content: "Une seconde s'il vous plait..."
    });

    return loader;
    //loader.present();
  }


}