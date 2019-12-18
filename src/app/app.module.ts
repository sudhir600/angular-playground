import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TranslatePipe} from './translate.pipe';
import {TranslateService} from './translate.service';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';

export function setupTranslateFactory(
	// tslint:disable-next-line:ban-types
	service: TranslateService): Function {
	const locale = localStorage.getItem('locale');
	return () => service.use(locale);
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    RoutingComponents
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
