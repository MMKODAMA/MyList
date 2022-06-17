import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genre?:Genre;
  genres = new Array<Genre>()
  modificando=false;
  colunas=['id','name','color','acoes']


    constructor(private genresService:GenresService) { }

    ngOnInit(): void {
      this.listar();
    }
    listar(){
      this.genresService.listar().subscribe(genres=>{
        this.genres=genres;
      });
    }
    novo(){
      this.genre = new Genre;
    }
    salvar(){
      if(this.genre){
        if(!this.modificando){
          this.genresService.criar(this.genre).subscribe(genre =>{
            this.genre=undefined;
            this.listar();
          });
        }else{
          this.genresService.atualizar(this.genre).subscribe(genre=>{
            this.modificando = false;
            this.genre= undefined;
            this.listar();
          });
        }
      }
    }
    editar(genre:Genre){
      this.genre= genre;
      this.modificando=true;
    }
    deletar(id:number){
      this.genresService.deletar(id).subscribe(()=>{
        this.listar();
    });
  }
  }
