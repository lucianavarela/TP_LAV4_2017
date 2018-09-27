import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  nuevoJuego: JuegoAdivina;
  mensajes: string;
  contador: number = 0;
  thinking: boolean = true;
  juegoService: JuegoServiceService;

  constructor(juegoService: JuegoServiceService) {
    this.nuevoJuego = new JuegoAdivina();
    this.juegoService = juegoService;
  }

  generarnumero() {
    this.nuevoJuego.gano = false;
    this.nuevoJuego.generarnumero();
    this.contador = 0;
    this.thinking = true;
  }

  verificar() {
    this.contador++;
    if (this.nuevoJuego.verificar()) {
      this.register();
      this.nuevoJuego.numeroIngresado = '';
    } else {
      this.thinking = false;
      let that = this;
      setTimeout(function () {
        that.MostarMensaje("Try #" + that.contador + ": " + that.nuevoJuego.retornarAyuda());
      }, 100);
    }
  }

  MostarMensaje(mensaje: string) {
    this.mensajes = mensaje;
    let that = this;
    setTimeout(function () {
      that.nuevoJuego.numeroIngresado = '';
      that.mensajes = '';
      that.thinking = true;
    }, 1000);
  }

  ngOnInit() {
    this.generarnumero();
  }

  closeModal() {
    this.generarnumero();
  }

  register() {
    let objeto: { juego: string, nivel: number, tiempo: number } = {
      juego: 'guess',
      nivel: this.contador,
      tiempo: 0
    }
    this.juegoService.cargar(objeto);
  }
}
