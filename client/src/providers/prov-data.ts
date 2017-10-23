import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class ProviderData {
  data: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/data.json')
        .map(this.processData);
    }
  }

  processData(data) {
    this.data = data.json();
    return this.data;
  }

  getActivity() {
    return this.load().map(data => {
      return data.activities;
    });
  }

  getSources() {
    return this.load().map(data => {
      return data.sources;
    });
  }
  

}
