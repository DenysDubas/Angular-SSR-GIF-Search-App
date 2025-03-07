import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Gif {
  id: string;
  title: string;
  username: string;
  url: string;
  images: {
    original: {
      url: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private apiKey = 'mB9vVbV0MsNMUtMhglWurdXkGjVunbya';
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {}

  searchGifs(query: string): Observable<Gif[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    return this.http.get<{ data: Gif[] }>(this.apiUrl, { params }).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('API error:', error);
        return of([]);
      })
    );
  }

  getGifDetails(id: string): Observable<Gif> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<{ data: Gif }>(`https://api.giphy.com/v1/gifs/${id}`, { params }).pipe(
      map(response => response.data)
    );
  }
}
