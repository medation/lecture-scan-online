import { Login } from './../login/login';
import { HomePage } from './../../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, App  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../model/user';

@Component({
  selector: 'page-registre',
  templateUrl: 'registre.html'
})
export class Registre {

    form : FormGroup;
    hasError: boolean;
    errorMessage: string;
    model: User;

    constructor(private authService: AuthService,private formBuilder: FormBuilder, public navParams: NavParams, public app: App) {
        this.model = new User();
        this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
        });
    }

    onSubmit(): void {

        this.model.email = this.form.value.email;
        this.model.password = this.form.value.password;
        this.model.firstname = this.form.value.firstname;
        this.model.lastname = this.form.value.lastname;

        this.authService
            .register(this.model)
            .subscribe(isRegistered => {
                if (isRegistered) {
                    let nav = this.app.getRootNav();
                    nav.push(HomePage);
                } else {
                    //send error
                    this.errorMessage = "Error registre",
                    this.hasError = true;
                }
            });
    }

    goToLogin(){
        let nav = this.app.getRootNav();
        nav.push(Login);
    }

}
