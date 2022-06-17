import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }


  listar(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${environment.apiEndpoint}/movie`);
  }

  criar(movie:Movie): Observable<Movie>{
    return this.http.post<Movie>(`${environment.apiEndpoint}/movie/`,movie);
  }
  atualizar(movie:Movie):Observable<Movie>{
    return this.http.put<Movie>(`${environment.apiEndpoint}/movie/${movie.id}`,movie);
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`${environment.apiEndpoint}/movie/${id}`);
  }
}
