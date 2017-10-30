
import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

const API_URL = 'http://localhost:8080/api';
@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get(API_URL + '/users')
            .map(response => response.json() as User[]);
    }

    getUser(userId: string): Observable<User> {
        return this.http.get(API_URL + '/user/' + userId)
            .map(response => response.json());
    }

    getUserByEmail(userEmail: String): Observable<User> {
        return this.http.get(API_URL + '/user/email/' + userEmail)
            .map((response: Response) => response.json() as User);
    }
}
