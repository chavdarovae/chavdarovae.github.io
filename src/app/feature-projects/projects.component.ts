import { Component } from '@angular/core';
import { IProject } from '../utils/interfaces/general.interface';
import { NgTemplateOutlet } from '@angular/common';
import { RangePipe } from '../utils/pipes/number-to-array.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { ImageRotatorComponent } from '../ui/image-rotator/image-rotator.component';
import { AnchorNavComponent } from '../ui/anchor-nav/anchor-nav.component';
import { PROJECT_CONTENT } from '../utils/constants/projects-content';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [
		NgTemplateOutlet,
		RangePipe,
		TranslatePipe,
		ImageRotatorComponent,
		AnchorNavComponent,
	],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
	projectList: IProject[] = PROJECT_CONTENT;
	vertNavList = [
		'workProjectsDiv',
		'personalProjectsDiv',
		'studyProjectsDiv',
	];
	selectedNav = 'workProjectsDiv';
}
