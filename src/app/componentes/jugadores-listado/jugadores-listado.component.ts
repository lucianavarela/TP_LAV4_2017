import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  miRoute: Router;
  listado: any;
  miJugadoresServicio: JugadoresService;

  constructor(serviceJugadores: JugadoresService, route: Router) {
    this.miRoute = route;
    this.miJugadoresServicio = serviceJugadores;
  }

  ngOnInit() {
    if (!localStorage.getItem('nombre')) {
      this.miRoute.navigate(['/Principal']);
    } else {
      this.TraerTodos();
    }
  }


  TraerTodos() {
    this.miJugadoresServicio.traertodos('api/jugador/', 'todos').then(data => {
      this.listado = data;
    })
  }

  TraerGanadores() {
    this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
      this.listado = data;
    })
  }

  TraerPerdedores() {
    this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
      this.listado = data;
    })
  }

}
