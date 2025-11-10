import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgStyle } from '@angular/common';
import { ICourse } from '../utils/interfaces/general.interface';
import { RangePipe } from '../utils/pipes/number-to-array.pipe';
import { COURSES_CONTENT } from '../utils/constants/courses-content';

@Component({
	selector: 'app-courses',
	imports: [TranslatePipe, RangePipe, NgStyle],
	templateUrl: './courses.component.html',
	styleUrl: './courses.component.scss',
})
export class CoursesComponent {
	courses: ICourse[] = COURSES_CONTENT;
	selectedCourse?: ICourse;
}
