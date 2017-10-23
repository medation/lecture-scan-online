import { Manga } from './../manga/manga';
import { LectureApiService } from './../../services/lectureapi.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utility } from '../../providers/utility';

import { App } from 'ionic-angular';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class Dashboard {

    mangas = [];
 
    constructor(    public app: App, 
                    public utility: Utility,
                    public lectureApiService : LectureApiService,
                    public navParams: NavParams ) 
    { 

    }

    ionViewDidLoad() {
        this.app.setTitle('Accueil');    
        this.updateHangout();
    }

    updateHangout() {
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();

        this.lectureApiService.getMangas().subscribe(data => {
        
            this.mangas = data;

           //Hide loading
            setTimeout(function(){
                loading.dismiss();
            },1000); 

        });
    
    }

    goTo(item){
        
        let nav = this.app.getRootNav();
        nav.push(Manga, item);

    }

}
