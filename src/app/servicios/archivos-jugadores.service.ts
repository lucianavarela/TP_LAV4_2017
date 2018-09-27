import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable()
export class ArchivosJugadoresService {

  peticion: any;

  constructor(public miHttp: MiHttpService) { }

  public traerJugadores(ruta) {
    return this.miHttp.httpGetO(this.miHttp.api + ruta)
      .toPromise()
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      });
  }
}
