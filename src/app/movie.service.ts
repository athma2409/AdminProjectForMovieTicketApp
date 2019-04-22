// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private movieUrl = 'http://localhost:3000/api/movies';
  constructor(private http: HttpClient) {

    var movie=[];
    var movieList = [
    
      {id:2,name:'Captain Marvel', year:2019, image_url:'https://contentserver.com.au/assets/667514_captain_marvel_v8.jpg', production_house:'Australia X',rating:4, type:'fiction',language:'English',date:'2019-02-01' }

    ];

  }
  addMovie(movie):Observable<any>{
    return this.http.post<[]>(this.movieUrl, movie); 	
   }
   getMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl +"/" + id); 	
   }
      
      getRemoteMovies(): Observable<[]> {
        return this.http.get<[]>(this.movieUrl);
      }
    


  deleteRemoteMovies(movie) {
    return this.http.delete(this.movieUrl + "/" + movie.id);
  }




  addRemoteMovie(movie):Observable<any>{
    console.log(JSON.stringify(movie));
    delete(movie.id);
  	return this.http.post(this.movieUrl,movie);
 }




  }
