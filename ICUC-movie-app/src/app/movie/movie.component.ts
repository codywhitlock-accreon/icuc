import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api/services/movie.service';
import { MovieDetails } from '../api/model/movie-details';

import { SearchResults } from '../api/model/search-results';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: [
        '../style/style.scss',
        '../style/loader.scss'
    ]
})

export class MovieComponent implements OnInit {
    loading = false;
    showModal = false;
    showErrorModal = false;
    _PLOT = 'full';

    movieTitle = '';
    movies: SearchResults;
    movieDetails: MovieDetails;

    constructor(private movieServices: MovieService) {
    }

    ngOnInit() {}

    getMovieByTitle(): Promise<SearchResults> {
        return this.movieServices.getMoviesByTitle(this.movieTitle);
    }

    getMovieById(id: string, plot: string): Promise<MovieDetails> {
        console.log(id);
        return this.movieServices.getMoviesByID(id, plot);
    }

    handleSeachClicked(): void {
        this.loading = true;
        if (this.movieTitle) {
            this.getMovieByTitle().then(response => {
                this.movies = response;
                if (this.movies.Response === 'False') {
                    this.showErrorModal = true;
                }
                this.loading = false;
            });
        }
    }

    handleMovieClicked(id: string): void {
        this.loading = true;
        this.getMovieById(id, this._PLOT).then(response => {
            this.movieDetails = response;
            console.log(this.movieDetails);
            this.loading = false;
            this.showModal = true;
        });
    }
}
