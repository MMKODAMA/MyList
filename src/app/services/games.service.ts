import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  listar(): Observable<Game[]>{
    return this.http.get<Game[]>(`${environment.apiEndpoint}/game`);
  }

  criar(game:Game): Observable<Game>{
    return this.http.post<Game>(`${environment.apiEndpoint}/game/`,game);
  }
  atualizar(game:Game):Observable<Game>{
    return this.http.put<Game>(`${environment.apiEndpoint}/game/${game.id}`,game);
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`${environment.apiEndpoint}/game/${id}`);
  }
}
