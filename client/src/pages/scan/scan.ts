import { User } from './../../model/user';
import { MangaModel } from './../../model/manga';
import { AuthService } from './../../services/auth.service';
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
    manga : MangaModel;
    user : User;
    item : MangaModel;
    
    constructor(public app: App,  
                public utility: Utility,
                public navParams: NavParams,
                public authService : AuthService,
                public lectureApiService : LectureApiService,
                public actionSheetCtrl: ActionSheetController) {
 
        this.chapitre = navParams.data.item;
        this.link = this.chapitre.urlToChapitre;
        this.manga = navParams.data.manga;
        this.user = navParams.data.user;            
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

    sauvegarderManga() {
        this.authService.saveManga(this.user,this.manga).subscribe(item => {
            this.item = item;
        });
    }

}
