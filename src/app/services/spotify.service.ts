import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCcCNCIJbKr3mwQ8zxAJXk-hi4q3hLQ268eFT2YibrJ0f32Mb4DpwSDVtiR3njdqZdel93OsiIB5916FUo'
  });

    return this.http.get(url,{headers});
  } 

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map((data:any) => {
          return data.albums.items;
      }))
    ;
      
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data:any) => {
          return data.artists.items;
              }))
    ;
      
    
  }
}
