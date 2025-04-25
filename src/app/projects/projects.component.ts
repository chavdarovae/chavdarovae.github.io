import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {PROJECT_CONTENT} from '../constants/projects-content';
import {IProject} from '../interfaces/general.interface';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import {RangePipe} from '../utils/number-to-array.pipe';

@Component({
  selector: 'app-projects',
	imports: [
		RouterLink,
		NgTemplateOutlet,
		NgIf,
		RangePipe
	],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
	projectList: IProject[] = PROJECT_CONTENT;
}
