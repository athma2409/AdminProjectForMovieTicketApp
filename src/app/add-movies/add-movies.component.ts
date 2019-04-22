import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss'],
})
export class AddMoviesComponent implements OnInit {

  constructor( private movieService:MovieService, private router :Router) { }
// movie=[];
//   ngOnInit() {
//     this.movieService.addRemoteMovie().subscribe((result) => { this.movie = result; });

//   }
//   addMovie(){
//     this.movieService.addRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/list-movie']);});
//   }

movie={
  name:'', year:'', image_url:'', production_house:'', rating:'',
  type:'', language:'', date:''
};

addMovie(){
this.movieService.addMovie(this.movie).subscribe(()=>{
  console.log(this.movie);
  // this.router.navigate(['/tabs/tab1']);
});
}


  ngOnInit() {
    

  }

}
