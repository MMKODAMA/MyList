import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { Genre } from 'src/app/model/genre';
import { MoviesService } from 'src/app/services/movies.service';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  genres = new Array<Genre>()

movie?:Movie;
movies = new Array<Movie>()
modificando=false;
colunas=['id','name','ano','genero','status','nota','acoes']

  constructor(private moviesService:MoviesService,private genresService:GenresService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.moviesService.listar().subscribe(movies=>{
      this.movies=movies;
    });
    this.genresService.listar().subscribe(genres=>{
      this.genres=genres;
    });
  }
  novo(){
    this.movie = new Movie;
  }
  salvar(){
    if(this.movie){
      if(!this.modificando){
        this.moviesService.criar(this.movie).subscribe(movie =>{
          this.movie=undefined;
          this.listar();
        });
      }else{
        this.moviesService.atualizar(this.movie).subscribe(movie =>{
          this.modificando = false;
          this.movie= undefined;
          this.listar();
        });
      }
    }
  }
  editar(movie:Movie){
    this.movie= movie;
    this.modificando=true;

  }
  deletar(id:number){
    this.moviesService.deletar(id).subscribe(()=>{
      this.listar();
  });
}
}


