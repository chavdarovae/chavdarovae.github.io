import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';
import {RangePipe} from '../utils/number-to-array.pipe';

@Component({
  selector: 'app-about-me',
	imports: [
		TranslatePipe,
		UpperCasePipe,
		RangePipe
	],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
	certList = [
		{ course: 'JavaScript Backend', img: 'js-backend.png'},
		{ course: 'JavaScript Applications', img: 'js-applications.png'},
		{ course: 'JavaScript Advanced', img: 'js-advanced.png'},
		{ course: 'JavaScript Fundamentals', img: 'js-fundamentals.png'},
		{ course: 'Technology Fundamentals', img: 'js-essentials.png'},
		{ course: 'Programming Basics - Java', img: 'pb-java.png'},
		{ course: 'Programming Basics - C#', img: 'pb-csharp.png'},
	]
}
