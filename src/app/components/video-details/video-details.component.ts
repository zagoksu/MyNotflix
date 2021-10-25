import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

@Input() movie?: IMovie;


  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
    }

    goBack(): void {
      this.location.back();
    }
}
