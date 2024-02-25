import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: any =[];
  constructor(private movieService: MoviesService){

  }

  ngOnInit(): void{
    this.loadMovies()
  }

  loadMovies(){
    this.movieService.getMovies().subscribe({
      next: (res: any)=>{
        this.movies = res.results;
        console.log(res.results);
      },
      error: (error)=> {
        console.log('Error while fetching movies', error);
      }
    })
  }
}
