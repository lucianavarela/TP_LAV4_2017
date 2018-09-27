import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import { Subscription } from "rxjs";
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  Tiempo: number;
  repetidor: any;
  isEnd: boolean = false;
  mensajeLooser: string = '';
  juegoService: JuegoServiceService;

  constructor(juegoService: JuegoServiceService) {
    this.nuevoJuego = new JuegoAgilidad();
    this.juegoService = juegoService;
  }

  NuevoJuego() {
    this.nuevoJuego.generarValores();
    clearInterval(this.repetidor);
    this.Tiempo = 2000;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      if (this.Tiempo <= 0) {
        this.nuevoJuego.respuestaUser = null;
        this.nuevoJuego.verificar();
        this.isEnd = true;
        this.mensajeLooser = 'Out of Time!';
        clearInterval(this.repetidor);
      }
    }, 10);
  }

  verificar() {
    clearInterval(this.repetidor);
    this.nuevoJuego.tiempo_total += (2000 - this.Tiempo);
    let respuesta = this.nuevoJuego.verificar();
    if (!this.nuevoJuego.gano) {
      this.mensajeLooser = 'It was ' + respuesta;
    }
    this.isEnd = true;
    if (this.isEnd) {
      if (!this.nuevoJuego.gano) {
        if (this.nuevoJuego.nivel > 1) {
          this.register();
        }
        this.nuevoJuego.nivel = 1;
      } else {
        this.nuevoJuego.nivel++;
      }
    }
    this.nuevoJuego.respuestaUser = null;
  }

  closeModal() {
    this.isEnd = false;
    this.nuevoJuego.operador = '';
  }

  ngOnInit() {
    this.Tiempo = 2000;
  }

  register() {
    let objeto: { juego: string, nivel: number, tiempo: number } = {
      juego: 'Math Speed',
      nivel: this.nuevoJuego.nivel,
      tiempo: this.nuevoJuego.tiempo_total
    }
    this.juegoService.cargar(objeto);
  }
}
