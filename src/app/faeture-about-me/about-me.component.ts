import { Component } from '@angular/core';
import { ModalComponent } from '@emc-ui';
import { TranslatePipe } from '@ngx-translate/core';
import { ABOUT_CONTENT, RangePipe } from 'app/utils';

@Component({
    selector: 'emc-about-me',
    imports: [TranslatePipe, RangePipe, ModalComponent],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
    certificateList = ABOUT_CONTENT;

    showModal!: boolean;
    currCertificateImg!: string;
}
