import {Component, HostListener, Input} from '@angular/core';
import {AppService} from '../../app.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrl: './preview-dialog.component.scss',
  standalone: true,
  imports: [
  ],
})
export class PreviewDialogComponent {
	@Input() resourceUrl?: string;
	showDialog = false;

	@HostListener('document:click', ['$event'])
	onWindowClick(event: MouseEvent) {
		if (this.showDialog) {
			this.close()
		}
		this.showDialog = !this.showDialog;
	}

	constructor(protected appService: AppService) { }

	close(): void {
		const dialog = document.getElementById('dialogRef') as HTMLDialogElement;
		if (dialog) {
			dialog.close();
		}
	}
}
