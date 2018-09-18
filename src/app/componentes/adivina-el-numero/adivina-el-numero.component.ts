
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  mensajes: string;
  contador: number = 0;
  thinking: boolean = true;

  constructor() {
    this.nuevoJuego = new JuegoAdivina();
  }
  
  generarnumero() {
    this.nuevoJuego.gano=false;
    this.nuevoJuego.generarnumero();
    this.contador = 0;
    this.thinking = true;
  }

  verificar() {
    this.contador++;
    if (this.nuevoJuego.verificar()) {
      this.nuevoJuego.numeroIngresado='';
      //this.enviarJuego.emit(this.nuevoJuego);
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
      that.nuevoJuego.numeroIngresado='';
      that.mensajes = '';
      that.thinking = true;
    }, 1500);
  }

  ngOnInit() {
    this.generarnumero();
  }

  closeModal() {
    this.generarnumero();
  }

}
