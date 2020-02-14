import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieDetails } from 'src/app/api/model/movie-details';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: [
        '../../style/modal.scss',
        '../../style/loader.scss'
    ]
})

export class MovieDetailsComponent {
    @Input() details: MovieDetails;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();

    constructor() {}
}
