import { Component, OnInit } from '@angular/core';
import { OMDBService } from '../providers/omdb.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  filter: string = 'batman';

  movies = [];

  constructor(private omdb: OMDBService) { }

  ngOnInit() {
    this.searchModies()
  }

  searchModies() {
    this.omdb.searchMovies(this.filter).subscribe((response: any) => {
      this.movies = response.Search;
    })
  }
}
