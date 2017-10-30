import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
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
    item : any;
    user : User;
    email : string;
    constructor(    public app: App, 
                    public utility: Utility,
                    public lectureApiService : LectureApiService,
                    public userService : UserService,
                    public navParams: NavParams ) 
    { 
        this.item = {  title :"Search",  category:"null",  statue:"null", url: "null", resume:"null", chapitres: "null", nbrTome : 0 };
    
        this.user = navParams.data;
        this.email = this.user.email;
        
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

    getItems(ev: any) {
        // Reset items back to all of the items

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            for(var i = 0;i<this.mangas.length;i++) { 
                if(this.mangas[i].title == val)
                {
                    this.item = this.mangas[i];
                }
            }
        }
        
    }


    goTo(item){
        
        let nav = this.app.getRootNav();
        nav.push(Manga, {
            "item" : item,
            "user" : this.user
        });

    }

}
