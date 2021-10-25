import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IMovie } from './models/movie';
import { Movies } from 'src/api/mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<IMovie[]> {
    const movies = of(Movies)
    return movies;
  }

  getMovie(id: number): Observable<IMovie> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const movie = Movies.find(m => m.id === id)!;
    return of(movie);
  }

    
}
