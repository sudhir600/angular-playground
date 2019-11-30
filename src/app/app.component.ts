import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'NG8 Project (sudhir)';

  constructor(private translate: TranslateService) {
    console.log(translate.data);
  }
  
  setLang(lang: string) {
    this.translate.use(lang);
  }

}
