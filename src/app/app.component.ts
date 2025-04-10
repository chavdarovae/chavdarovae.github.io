import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslateDirective, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgTemplateOutlet, UpperCasePipe} from '@angular/common';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		RouterLink,
		TranslatePipe,
		UpperCasePipe,
		NgTemplateOutlet
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	menuItems = ['about', 'courses', 'experience', 'projects'];

	constructor(protected translate: TranslateService) {
		this.translate.addLangs(['de', 'en']);
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}

	changeLanguage() {
		this.translate.use(this.translate.currentLang === 'en' ? 'de':'en')
	}
}
