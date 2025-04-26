import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {PROJECT_CONTENT} from '../constants/projects-content';
import {IProject} from '../interfaces/general.interface';
import {NgClass, NgIf, NgTemplateOutlet} from '@angular/common';
import {RangePipe} from '../utils/number-to-array.pipe';
import {TranslatePipe} from '@ngx-translate/core';
import {AnchorNavComponent} from '../ui/anchor-nav/anchor-nav.component';

@Component({
  selector: 'app-projects',
	imports: [
		RouterLink,
		NgTemplateOutlet,
		NgIf,
		RangePipe,
		TranslatePipe,
		NgClass,
		AnchorNavComponent
	],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
	projectList: IProject[] = PROJECT_CONTENT;
	vertNavList = ['workProjectsDiv', 'personalProjectsDiv', 'studyProjectsDiv'];
	selectedNav = 'workProjectsDiv';
}
