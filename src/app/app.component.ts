import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { filter, map, Observable, shareReplay } from 'rxjs';

@Component({
    selector: 'emc-root',
    imports: [RouterOutlet, RouterLink, TranslatePipe, UpperCasePipe, NgTemplateOutlet, AsyncPipe, NgClass],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    menuItems = ['about', 'courses', 'experience', 'projects'];
    activePath$!: Observable<string>;

    constructor(
    	protected translate: TranslateService,
        private router: Router,
    ) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    ngOnInit() {
        this.activePath$ = this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map((event) => {
                return event.url.split('/')[1].split('#')[0] || 'about';
            }),
            shareReplay({ refCount: true, bufferSize: 1 }),
        );
    }

    changeLanguage() {
        this.translate.use(this.translate.currentLang === 'en' ? 'de' : 'en');
    }
}
