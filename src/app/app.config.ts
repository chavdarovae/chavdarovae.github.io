import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withHashLocation, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
	  provideZoneChangeDetection({
		  eventCoalescing: true
	  }),
	  provideRouter(
		  routes,
		  withHashLocation(),
		  withRouterConfig({
			  onSameUrlNavigation: 'reload'
		  })
	  )
  ]
};
