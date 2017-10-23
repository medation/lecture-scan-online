import { Scan } from './../scan/scan';
import { LectureApiService } from './../../services/lectureapi.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Utility } from '../../providers/utility';

import { App } from 'ionic-angular';



@Component({
  selector: 'page-manga',
  templateUrl: 'manga.html',
})

export class Manga {

    
    chapitres = [];
    manga : any;
    link : String;

    constructor(public app: App,  
                public utility: Utility,
                public navParams: NavParams,
                public lectureApiService : LectureApiService,
                public actionSheetCtrl: ActionSheetController) {
 
        this.manga = navParams.data;
        this.link = this.manga.url;            
    }

    ionViewDidLoad() {
        this.app.setTitle('Source');    
        this.updateHangout();
    }

    updateHangout() {
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();

        this.lectureApiService.getManga(this.link).subscribe(data => {
        
            this.chapitres = data;

           //Hide loading
            setTimeout(function(){
                loading.dismiss();
            },1000); 

        });
    
    }

    lectureChapitre(item) {
        let nav = this.app.getRootNav();
        nav.push(Scan,item);
    }

}
