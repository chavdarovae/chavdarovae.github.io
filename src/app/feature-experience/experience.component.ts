import { Component } from '@angular/core';
import { IWorkExperience } from '../utils/interfaces/general.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { NgForOf, NgIf } from '@angular/common';
import { RangePipe } from '../utils/pipes/number-to-array.pipe';
import { AnchorNavComponent } from '../ui/anchor-nav/anchor-nav.component';
import { RouterLink } from '@angular/router';
import { EXPERIENCE_CONTENT } from '../utils/constants/experience-content';

@Component({
    selector: 'app-experience',
    imports: [
        TranslatePipe,
        NgForOf,
        RangePipe,
        AnchorNavComponent,
        RouterLink,
        NgIf,
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
    experienceList: IWorkExperience[] = EXPERIENCE_CONTENT;
    link =
        '<a href="#" class="work__description-link" id="projects">Projects</a>';
    vertNavList = ['colletoDiv', 'stenliDiv'];
    selectedNav = 'colletoDiv';
}
