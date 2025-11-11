import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'emc-anchor-nav',
    templateUrl: './anchor-nav.component.html',
    styleUrl: './anchor-nav.component.scss',
    standalone: true,
    imports: [RouterLink, NgClass, TranslatePipe],
})
export class AnchorNavComponent {
    @Input() navList = ['workProjectsDiv', 'personalProjectsDiv', 'studyProjectsDiv'];
    @Input() transPrefix!: string;
    @Input() selectedNav!: string;
    @Output() goToFragement: EventEmitter<string> = new EventEmitter();
}
