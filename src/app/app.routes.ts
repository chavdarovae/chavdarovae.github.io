import { Routes } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {ExperienceComponent} from './experience/experience.component';
import {ProjectsComponent} from './projects/projects.component';
import {CoursesComponent} from './courses/courses.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'about',
		pathMatch: 'full'
	},
	{
		path: 'about',
		component: AboutMeComponent,
	},
	{
		path: 'courses',
		component: CoursesComponent,
	},
	{
		path: 'projects',
		component: ProjectsComponent,
	},
	{
		path: 'experience',
		component: ExperienceComponent,
	}
];
