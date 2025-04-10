import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-about-me',
	imports: [
		TranslatePipe,
		UpperCasePipe
	],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
