import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';
import { routes } from './app/app.routes';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimations } from '@angular/platform-browser/animations';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, 'i18n/', '.json');

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideZoneChangeDetection({
            eventCoalescing: true,
        }),
        provideRouter(
            routes,
            withHashLocation(),
            withRouterConfig({
                onSameUrlNavigation: 'reload',
            }),
        ),
        provideTranslateService({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        provideAnimations(),
    ],
}).catch((err) => console.error(err));
