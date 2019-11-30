// Reference taken from - https://gitlab.com/DenysVuika/medium-i18n/ (step by step - http://bit.ly/34A4X91)
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: any): any {
    //return this.translate.data[key] || key;
    return key.split('.').reduce(function(prev, curr) {
			return prev ? prev[curr] : key;
		}, this.translate.data || self);
  }
}