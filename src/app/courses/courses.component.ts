import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';
import {ICourse} from '../interfaces/general.interface';
import {COURSES_CONTENT} from '../constants/courses-content';
import {RangePipe} from '../utils/number-to-array.pipe';

@Component({
  selector: 'app-courses',
	imports: [
		TranslatePipe,
		UpperCasePipe,
		RangePipe
	],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
	courses: ICourse[] = COURSES_CONTENT;
}
