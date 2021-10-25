import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { Movies } from 'src/api/mock-movies';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  

  movie =  {
    "id": 1,
    "name": "John Wick",
    "description": "Nice movie",
    "genre": "Action",
    "rating": 4,
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    "videoUrl": "https://www.youtube.com/embed/2AUmvWm5ZDQ"
  };

  movies: IMovie[] = [];


  constructor(private moviesService: MoviesService) { }

  selectedMovie?: IMovie;
  onSelect(movie: IMovie): void {
    this.selectedMovie = movie;
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void{
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = movies);
  }
}
