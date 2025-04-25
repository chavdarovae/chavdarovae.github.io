import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';
import {ICourse} from '../interfaces/general.interface';
import {COURSES_CONTENT} from '../constants/courses-content';

@Component({
  selector: 'app-courses',
	imports: [
		TranslatePipe,
		UpperCasePipe
	],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
	courses: ICourse[] = COURSES_CONTENT;
}
