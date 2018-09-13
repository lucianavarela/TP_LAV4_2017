import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import { Subscription } from "rxjs";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  Tiempo: number;
  repetidor: any;
  isEnd: boolean = false;
  mensajeLooser: string = '';
  
  constructor() {
    this.Tiempo = 30;
    this.nuevoJuego = new JuegoAgilidad();
  }
  
  NuevoJuego() {
    this.nuevoJuego.generarValores();
    clearInterval(this.repetidor);
    this.Tiempo = 300;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      if (this.Tiempo == 0) {
        this.nuevoJuego.gano = false;
        this.mensajeLooser = 'Out of Time!';
        clearInterval(this.repetidor);
      }
    }, 100);
  }
  
  verificar() {
    let respuesta = this.nuevoJuego.verificar();
    if (!this.nuevoJuego.gano) {
      this.mensajeLooser = 'It was ' + respuesta;
    }
    this.isEnd = true;
  }

  closeModal() {
    this.isEnd = false;
    this.nuevoJuego.operador = '';
  }

  ngOnInit() {}
}
