import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(private http: Http) {
    console.log('Hello CountryProvider Provider');
  }

  getAllPosts() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  getComments(id) {
    var url = "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
