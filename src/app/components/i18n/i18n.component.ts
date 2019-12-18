import { Component } from '@angular/core';
import {TranslateService} from '../../translate.service';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styles: []
})
export class I18nComponent {
	
  constructor(private translate: TranslateService) {}

	activeLocale = localStorage.getItem('locale');

	changeTo(lng: string) {
		this.activeLocale = lng;
		this.translate.use(lng);
		localStorage.setItem('locale', lng);
	}
}
