import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"
import { OMDBService } from './providers/omdb.service';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [SearchPageComponent, MovieCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: SearchPageComponent,
      }
    ])
  ],
  providers: [OMDBService]
})
export class OmdbsearchModule { }
