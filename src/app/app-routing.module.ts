import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { BooksComponent } from './views/books/books.component';
import { GamesComponent } from './views/games/games.component';
import { GenresComponent } from './views/genres/genres.component';
import { MoviesComponent } from './views/movies/movies.component';

const routes: Routes = [
  {path:'game', component:GamesComponent},
  {path:'genre', component:GenresComponent},
  {path:'movies', component:MoviesComponent},
  {path:'books', component:BooksComponent},
  {path:'about', component:AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
