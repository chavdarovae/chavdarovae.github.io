import { Routes } from '@angular/router';
import { AboutMeComponent } from './faeture-about-me/about-me.component';
import { ExperienceComponent } from './feature-experience/experience.component';
import { ProjectsComponent } from './feature-projects/projects.component';
import { CoursesComponent } from './feature-courses/courses.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
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
    },
];
