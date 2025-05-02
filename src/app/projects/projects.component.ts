import {Component} from '@angular/core';
import {PROJECT_CONTENT} from '../constants/projects-content';
import {IProject} from '../interfaces/general.interface';
import {NgIf, NgTemplateOutlet} from '@angular/common';
import {RangePipe} from '../utils/number-to-array.pipe';
import {TranslatePipe} from '@ngx-translate/core';
import {ImageRotatorComponent} from '../ui/image-rotator/image-rotator.component';
import {AnchorNavComponent} from '../ui/anchor-nav/anchor-nav.component';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [
		NgTemplateOutlet,
		NgIf,
		RangePipe,
		TranslatePipe,
		ImageRotatorComponent,
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
