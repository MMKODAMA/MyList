import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Genre } from 'src/app/model/genre';
import { BooksService } from 'src/app/services/books.service';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  genres = new Array<Genre>()

book?:Book;
books = new Array<Book>()
modificando=false;
colunas=['id','name','autor','genero','generoCor','status','nota','acoes']

  constructor(private booksService:BooksService,private genresService:GenresService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.booksService.listar().subscribe(books=>{
      this.books=books;
    });
    this.genresService.listar().subscribe(genres=>{
      this.genres=genres;
    });
  }
  novo(){
    this.book = new Book;
  }
  salvar(){
    if(this.book){
      if(!this.modificando){
        // Passa genre.color para generoCor
        this.genres.forEach (genre => {
          if(this.book?.genero==genre.name){
            this.book.generoCor=genre.color;
          }
        });
        this.booksService.criar(this.book).subscribe(book =>{
          this.book=undefined;
          this.listar();
        });
      }else{
        // Passa genre.color para generoCor
        this.genres.forEach (genre => {
          if(this.book?.genero==genre.name){
            this.book.generoCor=genre.color;
          }
        });
        this.booksService.atualizar(this.book).subscribe(book =>{
          this.modificando = false;
          this.book= undefined;
          this.listar();
        });
      }
    }
  }
  editar(book:Book){
    this.book= book;
    this.modificando=true;

  }
  deletar(id:number){
    this.booksService.deletar(id).subscribe(()=>{
      this.listar();
  });
}
}
