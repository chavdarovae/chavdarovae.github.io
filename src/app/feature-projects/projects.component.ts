import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { AnchorNavComponent, ImageRotatorComponent } from '@emc-ui';
import { IProject, PROJECT_CONTENT, RangePipe } from '@emc-util';
import { AppService } from 'app/app.service';

@Component({
    selector: 'emc-projects',
    standalone: true,
    imports: [NgTemplateOutlet, RangePipe, TranslatePipe, ImageRotatorComponent, AnchorNavComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    appService = inject(AppService);

    projectList: IProject[] = PROJECT_CONTENT;
    vertNavList = ['workProjectsDiv', 'personalProjectsDiv', 'studyProjectsDiv'];
    selectedNav = 'workProjectsDiv';
}
