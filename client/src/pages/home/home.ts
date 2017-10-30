import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private authService: AuthService) {
    }

    logOut(): void {
        this.authService.logOut().subscribe(isLoggedIn => {
            if (isLoggedIn === false) {
                //LOGOUT
            }
        });
    }
}


