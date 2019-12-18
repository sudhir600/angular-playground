import { Component } from '@angular/core';
import { TranslateService } from './translate.service';
import { DataService } from './data.service';
import { Ajax } from './services/ajax';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'NG8 Project (sudhir)';
  products = [];

  constructor(private translate: TranslateService, private ajaxService: Ajax, private dataService: DataService) {}
  
  //myHeaders = new Headers();
  //myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  //myHeaders.append("test123", "ok/test123");

  async get() {
    let config = {
      'method' : 'get',
      'url' : 'https://jsonplaceholder.typicode.com/todos/1',
    };
    let response = await this.ajaxService.$ajax(config);
    console.log('ajax GET =', response);
  }
  async post() {
    let config = {
      'method' : 'post',
      'url' : 'https://portal.weclapp.com/webapp/resource/rest/login/check/',
    };

    let body = new URLSearchParams();
    body.set('email', 'ala@weclapp.com');
    body.set('password', 'weclapp@9');
    config['body'] = body.toString();

    let response = await this.ajaxService.$ajax(config);
    console.log('ajax post =', response);
  }
  subscribe(){
    let config = {
      'method' : 'get',
      'url' : 'https://jsonplaceholder.typicode.com/todos/1',
    };
    this.dataService.subscribe(config);
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }

}
