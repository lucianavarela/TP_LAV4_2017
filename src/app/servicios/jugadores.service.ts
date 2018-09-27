import { Injectable } from '@angular/core';
import { ArchivosJugadoresService } from './archivos-jugadores.service'

@Injectable()
export class JugadoresService {

  peticion: any;
  jugadores: any;

  constructor(public miHttp: ArchivosJugadoresService) { }

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerJugadores(ruta)
      .then(data => {
        this.jugadores = data;
        return this.jugadores;
      }).catch(error => {
        return this.jugadores;
      });
  }
}