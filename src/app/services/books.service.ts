import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }


  listar(): Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.apiEndpoint}/book`);
  }

  criar(book:Book): Observable<Book>{
    return this.http.post<Book>(`${environment.apiEndpoint}/book/`,book);
  }
  atualizar(book:Book):Observable<Book>{
    return this.http.put<Book>(`${environment.apiEndpoint}/book/${book.id}`,book);
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`${environment.apiEndpoint}/book/${id}`);
  }
}
