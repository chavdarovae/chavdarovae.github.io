import { Component } from '@angular/core';
import {IWorkExperience} from '../interfaces/general.interface';
import {EXPERIENCE_CONTENT} from '../constants/experience-content';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';
import {RangePipe} from '../utils/number-to-array.pipe';
import {AnchorNavComponent} from '../ui/anchor-nav/anchor-nav.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-experience',
	imports: [
		TranslatePipe,
		NgForOf,
		RangePipe,
		AnchorNavComponent,
		RouterLink
	],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
	experienceList: IWorkExperience[] = EXPERIENCE_CONTENT;
	link = '<a href="#" class="work__description-link" id="projects">Projects</a>';
	vertNavList = ['colletoDiv', 'stenliDiv'];
	selectedNav = 'colletoDiv';
}
