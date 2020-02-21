import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OMDBService {
  constructor(private http: HttpClient) {}

  searchMovies(filter: string) {
    // ?s=batman&plot=full&apikey=dd3b3c8d
    return this.http.get('http://www.omdbapi.com', {
      params: {
        s: filter,
        plot: "full",
        apiKey: "dd3b3c8d" 
      }
    })
  }
}