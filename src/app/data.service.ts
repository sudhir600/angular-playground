import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { ajax } from 'rxjs/ajax';
// import { map, retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  options: object = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Access-Control-Allow-Origin': '*',
      'cache-control': 'no-cache',
      'redirect': 'follow'
    }
  };
  constructor(private httpClient: HttpClient) { }

  async subscribe(config) {
    console.time('subscribe');

    let body = new URLSearchParams();
    body.set('email', 'ala@weclapp.com');
    body.set('password', 'weclapp@9');

console.log(config.body, 'chal', body.toString())

  return this.httpClient.post(config.url, config.body, this.options).subscribe(async data => {
      console.log('hello data from service - ', data);
      console.timeEnd('subscribe');
      return data;
    });
  }
  public sendGetRequest(){
    // return this.httpClient.get(this.REST_API_SERVER);
  }

}
