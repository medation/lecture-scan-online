
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user';
import { MangaModel } from './../model/manga';

const API_URL = 'http://localhost:8080/api';

@Injectable()
export class AuthService {

    isLoggedIn = false;
    user : User;

    constructor(private http: Http) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    login(user: User): Observable<boolean> {
        return this.http.post(API_URL + '/login', user)
            .map(response => response.json())
            .map((currentUser: User) => {
                if (!User.isNull(currentUser)) {
                    this.isLoggedIn = true;
                    return true;
                } else {
                    this.isLoggedIn = false;
                    return false;
                }
            })
            .catch(AuthService.handleError);
    }

    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }

    register(user: User): Observable<boolean> {
        return this.http.post(API_URL + '/register', user)
            .map(response => response.json() as User)
            .map(currentUser => !User.isNull(currentUser))
            .catch(AuthService.handleError);
    }

    saveManga(user : User, manga : MangaModel) : Observable<any> {
        return this.http.post(API_URL + '/saveManga/' + user.email, manga)
            .map(response => response.json() as MangaModel);
    }

    getCurrentUser(user: User): Observable<User>{
        return this.http.get(API_URL + '/user/email/' + user.email)
            .map(response => response.json())
            .map((currentUser: User) => {
                return currentUser;
            });
    }
}
