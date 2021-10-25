import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from '../app/components/movies/movies.component';
import { AddMovieComponent } from '../app/components/add-movie/add-movie.component';
import { VideoDetailsComponent } from '../app/components/video-details/video-details.component';
import { SearchMovieComponent } from '../app/components/search-movie/search-movie.component';
import { MovieComponent } from '../app/components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddMovieComponent,
    VideoDetailsComponent,
    SearchMovieComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
