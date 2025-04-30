import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
	resourceUrl?: string;

	showDialog(imgPath: string) {
		this.resourceUrl = imgPath;
		const dialog = document.getElementById('dialogRef') as HTMLDialogElement;
		if (dialog) {
			dialog.showModal();
		}
	}
}
