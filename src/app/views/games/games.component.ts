import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { Genre } from 'src/app/model/genre';
import { GamesService } from 'src/app/services/games.service';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

genres = new Array<Genre>()

game?:Game;
games = new Array<Game>()
modificando=false;
colunas=['id','name','dev','genero','plataforma','status','nota','acoes']



  constructor(private gamesService:GamesService,private genresService:GenresService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.gamesService.listar().subscribe(games=>{
      this.games=games;
    });
    this.genresService.listar().subscribe(genres=>{
      this.genres=genres;
    });
  }
  novo(){
    this.game = new Game;
  }
  salvar(){
    if(this.game){
      if(!this.modificando){
        this.gamesService.criar(this.game).subscribe(game =>{
          this.game=undefined;
          this.listar();
        });
      }else{
        this.gamesService.atualizar(this.game).subscribe(game=>{
          this.modificando = false;
          this.game= undefined;
          this.listar();
        });
      }
    }
  }
  editar(game:Game){
    this.game= game;
    this.modificando=true;

  }
  deletar(id:number){
    this.gamesService.deletar(id).subscribe(()=>{
      this.listar();
  });
}
}
