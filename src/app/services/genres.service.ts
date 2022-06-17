import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http:HttpClient) { }


  listar(): Observable<Genre[]>{
    return this.http.get<Genre[]>(`${environment.apiEndpoint}/genre`);
  }

  criar(genre:Genre): Observable<Genre>{
    return this.http.post<Genre>(`${environment.apiEndpoint}/genre/`,genre);
  }
  atualizar(genre:Genre):Observable<Genre>{
    return this.http.put<Genre>(`${environment.apiEndpoint}/genre/${genre.id}`,genre);
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`${environment.apiEndpoint}/genre/${id}`);
  }
}
