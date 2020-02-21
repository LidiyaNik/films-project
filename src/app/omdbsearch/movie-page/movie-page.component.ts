import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OMDBService } from '../providers/omdb.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.sass']
})
export class MoviePageComponent implements OnInit {

  movie = null;

  constructor(
    private route: ActivatedRoute, 
    private omdb: OMDBService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.omdb.getMovieByID(this.route.snapshot.params.id)
      .subscribe((response: any) => {
        this.movie = response;
      })
  }
  get poster() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.Poster)
   }

}
