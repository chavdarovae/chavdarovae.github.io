import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-anchor-nav',
	imports: [
		RouterLink,
		NgClass,
		TranslatePipe
	],
  templateUrl: './anchor-nav.component.html',
  styleUrl: './anchor-nav.component.scss'
})
export class AnchorNavComponent {
	@Input() navList = ['workProjectsDiv', 'personalProjectsDiv', 'studyProjectsDiv'];
	@Input() transPrefix?: string;
	@Input() selectedNav?: string;
}
