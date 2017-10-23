import { Observable } from 'rxjs/Observable';
import { Injectable }   from '@angular/core';
import { Http, Response }         from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class LectureApiService {

    private baseUrl: string = 'http://localhost:8080/';


    constructor(private http: Http) {

	}

    public getMangas(): Observable<any> {

        const url = `${this.baseUrl}listMangas`;
        return this.http.get(url).map((response: Response) => response.json());
    
    }

    public getManga(manga): Observable<any> {

        const url = `${this.baseUrl}infosManga/${manga}`;
        return this.http.get(url).map((response: Response) => response.json());
    
    }

    public getChapitre(chapitre): Observable<any> {

        const url = `${this.baseUrl}lecture/${chapitre}`;
        return this.http.get(url).map((response: Response) => response.json());
    
    }

}