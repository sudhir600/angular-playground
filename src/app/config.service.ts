import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class ConfigService {

constructor(private http: HttpClient) { }

 // headers = new HttpHeaders().set("X-CustomHeader", "custom header value");
  url = 'https://jsonplaceholder.typicode.com/todos/1';

getCharacters() {
  let a = this.http.get(this.url);
  //console.log('a = ', a);
  };
}
