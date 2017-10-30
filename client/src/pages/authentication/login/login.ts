import { Dashboard } from './../../dashboard/dashboard';
import { Registre } from './../registre/registre';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../model/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

    form : FormGroup;
    hasError: boolean;
    errorMessage: string;
    model: User;
    currentUser : User;
    
    constructor(public authService: AuthService,public formBuilder: FormBuilder, public navParams: NavParams, public app: App) {
        this.model = new User();
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {

        this.model.email = this.form.value.email;
        this.model.password = this.form.value.password;

        this.authService
            .login(this.model)
            .subscribe(isLoggedIn => {
                if (isLoggedIn) {
                    let nav = this.app.getRootNav();
                    nav.push(Dashboard);
                } else {
                    //send error
                    this.errorMessage = "Error registre",
                    this.hasError = true; 
                }
            });
        this.authService.getCurrentUser(this.model)
            .subscribe(user => {
                this.currentUser = user;
            });
        }
    
    goToRegistre(){
        let nav = this.app.getRootNav();
        nav.push(Registre,this.currentUser);
    }
}
