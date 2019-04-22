import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  constructor( private movieService:MovieService){}
  

 
  movie=[];

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => { this.movie = result; });
    //this.movie = this.movieService.movieList;
      
  }

  deleteMovie(movie) {
    this.movieService.deleteRemoteMovies(movie).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => { this.movie = result; });
    });
  
  }


}
