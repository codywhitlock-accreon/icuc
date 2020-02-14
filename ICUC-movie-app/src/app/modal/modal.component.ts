import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [
        '../style/modal.scss',
        '../style/loader.scss',
    ]
})

export class ModalComponent {
    @Input() errorCode?: string;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();
}
