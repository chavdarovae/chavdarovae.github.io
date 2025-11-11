import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'emc-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    imports: [RouterModule],
})
export class ModalComponent {
    @Input() entity: string = 'something';
    @Input() show: boolean = false;
    @Output() close = new EventEmitter<boolean>();

    onClose(confirmation?: boolean) {
        this.close.emit(!!confirmation);
    }
}
