import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  get poster() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.Poster)
  }
}
