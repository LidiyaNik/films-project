import { Component, OnInit } from '@angular/core';
import { OMDBService } from '../providers/omdb.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  filter: string = '';
  movies = [];
  loading = false;

  constructor(private omdb: OMDBService) { }

  ngOnInit() {
    if (sessionStorage.getItem("search")) {
      this.filter = sessionStorage.getItem("search");
      this.searchModies();
    }
  }

  searchModies() {
    this.loading = true;
    this.omdb.searchMovies(this.filter).subscribe((response: any) => {
      this.movies = response.Search;
      this.loading = false;
      sessionStorage.setItem("search", this.filter);
    }, (e) => {
      this.loading = false;
    })
  }

}
