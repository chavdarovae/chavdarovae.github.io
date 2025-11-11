import { AppService } from './../app.service';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EXPERIENCE_CONTENT, IWorkExperience, RangePipe } from '@emc-util';
import { AnchorNavComponent } from '@emc-ui';

@Component({
    selector: 'emc-experience',
    imports: [TranslatePipe, NgForOf, RangePipe, AnchorNavComponent, RouterLink, NgIf],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
    appService = inject(AppService);

    experienceList: IWorkExperience[] = EXPERIENCE_CONTENT;
    vertNavList = ['colletoDiv', 'stenliDiv'];
    selectedNav = 'colletoDiv';
}
