import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TranslateService} from './translate.service';
import { TranslatePipe } from './translate.pipe';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule, routingComponents} from './app-routing.module';

export function setupTranslateFactory(
	// tslint:disable-next-line:ban-types
	service: TranslateService): Function {
	const locale = localStorage.getItem('locale');
	return () => service.use(locale);
}


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
		TranslateService,
		{
			provide: APP_INITIALIZER,
			useFactory: setupTranslateFactory,
			deps: [TranslateService],
			multi: true
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule {}
