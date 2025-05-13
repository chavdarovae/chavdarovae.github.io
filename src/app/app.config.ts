import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, RouterModule, withHashLocation, withRouterConfig} from '@angular/router';
import {routes} from './app.routes';
import {provideTranslateService, TranslateLoader,} from '@ngx-translate/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
	new TranslateHttpLoader(http, 'i18n/', '.json');

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		provideZoneChangeDetection({
			eventCoalescing: true
		}),
		importProvidersFrom(RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled'
		})),
		provideRouter(
			routes,
			withHashLocation(),
			withRouterConfig({
				onSameUrlNavigation: 'reload'
			})
		),
		provideTranslateService({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		provideAnimations()
	]
};
