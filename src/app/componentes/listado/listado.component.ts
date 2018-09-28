import { Component, OnInit, Input } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  miRoute: Router;
  public myapp: string = "";
  public misJuegos: Array<string>;
  public listadoParaCompartir: Array<any>;
  miServicioJuego: JuegoServiceService;
  resultados: any;

  constructor (miServicioJuego: JuegoServiceService, route: Router) {
    this.miRoute = route;
    this.miServicioJuego = miServicioJuego;
  }

  llamaService() {
    this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa() {
    this.miServicioJuego.listarPromesa().then((listado) => {
      this.listadoParaCompartir = listado;
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('nombre')) {
      this.miRoute.navigate(['/Principal']);
    } else {
      this.traerTodos('');
    }
  }

  traerTodos(filtro:string) {
    this.miServicioJuego.traerTodos(filtro).then(data => {
      this.resultados = data;
    })
  }
}
