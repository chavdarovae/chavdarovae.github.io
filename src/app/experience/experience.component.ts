import { Component } from '@angular/core';
import {IWorkExperience} from '../interfaces/general.interface';
import {EXPERIENCE_CONTENT} from '../constants/experience-content';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
	experienceList: IWorkExperience[] = EXPERIENCE_CONTENT;
}
