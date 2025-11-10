import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RangePipe } from '../utils/pipes/number-to-array.pipe';
import { ModalComponent } from '../ui/modal/modal.component';
import { ABOUT_CONTENT } from '../utils/constants/about-content';

@Component({
    selector: 'app-about-me',
    imports: [TranslatePipe, RangePipe, ModalComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
    certificateList = ABOUT_CONTENT;

    showModal!: boolean;
    currCertificateImg!: string;
}
