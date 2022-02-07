import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

artistas:any[] = [];
loading:boolean = false;
error:boolean = false;

  constructor(private spotify:SpotifyService) { }

  buscar(termino:string){

    this.loading = true;
    console.log("Metodo buscar" + termino);
    this.spotify.getArtista(termino)
      .subscribe((data:any) => {
        this.artistas = data;
      }, (errorService) => {
        this.error = true;
        console.log(errorService);
      } 
      );
      this.loading = false;


  }

}
