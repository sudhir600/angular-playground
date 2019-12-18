import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Ajax {

  options: object = {
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'cache-control': 'no-cache'
    }
  }
  constructor(private httpClient: HttpClient) { }

  $ajax(config) {
    const method =  config.method;
    if (method !== 'get' && method !== 'delete'){
      this.options = {
        body: config.body,
        ...this.options
      }
    }
    const promise = this.httpClient.request(config.method, config.url, this.options).toPromise()
    promise.then((data) => {
      return data;
    }).catch((error) => {
      this.handleError(error);
    });
    return promise;
  }
  handleError(err){
    console.log('Something went wrong', err);
    throw err;
  }
}
