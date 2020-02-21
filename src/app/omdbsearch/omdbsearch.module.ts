import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"
import { OMDBService } from './providers/omdb.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  declarations: [SearchPageComponent, MovieCardComponent, MoviePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: SearchPageComponent,
      },
      {
        path: ":id",
        component: MoviePageComponent,
      }
    ])
  ],
  providers: [OMDBService]
})
export class OmdbsearchModule { }
