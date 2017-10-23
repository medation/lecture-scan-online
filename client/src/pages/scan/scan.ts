import { LectureApiService } from './../../services/lectureapi.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Utility } from '../../providers/utility';

import { App } from 'ionic-angular';



@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})

export class Scan {

    
    pages = [];
    chapitre : any;
    link : String;

    constructor(public app: App,  
                public utility: Utility,
                public navParams: NavParams,
                public lectureApiService : LectureApiService,
                public actionSheetCtrl: ActionSheetController) {
 
        this.chapitre = navParams.data;
        this.link = this.chapitre.urlToChapitre;            
    }

    ionViewDidLoad() {
        this.app.setTitle('Source');    
        this.updateHangout();
    }

    updateHangout() {
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();

        this.lectureApiService.getChapitre(this.link).subscribe(data => {
        
            this.pages = data;

           //Hide loading
            setTimeout(function(){
                loading.dismiss();
            },1000); 

        });
    
    }

    goToArticles(item) {
        let nav = this.app.getRootNav();
        nav.push(Scan,item);
    }

}
