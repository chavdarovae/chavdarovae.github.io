import { Routes } from '@angular/router';
import { AboutMeComponent } from '@emc-feature-about-me';
import { CoursesComponent } from '@emc-feature-cources';
import { ExperienceComponent } from '@emc-feature-experience';
import { ProjectsComponent } from '@emc-feature-projects';

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
        path: 'experience',
        component: ExperienceComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
];
