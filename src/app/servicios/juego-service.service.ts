import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { MiHttpService } from './mi-http/mi-http.service';
import { Router } from '@angular/router';

@Injectable()
export class JuegoServiceService {
  miRoute: Router;
  peticion: any;
  resultados: any;

  constructor(public miHttp: MiHttpService, private route: Router) {
    this.miRoute = route;
  }

  public listar(): Array<Juego> {
    this.miHttp.httpGetP(this.miHttp.api)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    this.peticion
      .subscribe(data => {
        console.log("En listar");
        console.log(data);
      }, err => {
        console.info("error: ", err);
      });
    let miArray: Array<Juego> = new Array<Juego>();
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
      .subscribe(data => {
        console.log("En listarPromesa");
        console.log(data);
      }, err => {
        console.log(err);
      })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      resolve(miArray);
    });

    return promesa;
  }

  public cargar(objeto) {
    return this.miHttp.httpPostP(this.miHttp.api + 'api/resultado/', objeto).subscribe(
      success => {
        this.peticion = success;
      }, error => {
        console.log(error);
      });
  }

  public traerTodos(filtro) {
    return this.miHttp.httpGetO(this.miHttp.api + 'api/resultado/')
      .toPromise()
      .then(data => {
        this.resultados = data;
        this.resultados = this.resultados.filter(data => data.juego === filtro || filtro == "");
        return this.resultados;
      }, err => {
        console.log(err);
      });
  }
}
