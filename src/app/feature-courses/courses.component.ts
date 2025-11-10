import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgStyle } from '@angular/common';
import { COURSES_CONTENT, ICourse, RangePipe } from '@emc-util';

@Component({
	selector: 'emc-courses',
	imports: [TranslatePipe, RangePipe, NgStyle],
	templateUrl: './courses.component.html',
	styleUrl: './courses.component.scss',
})
export class CoursesComponent {
	courses: ICourse[] = COURSES_CONTENT;
	selectedCourse?: ICourse;
}
