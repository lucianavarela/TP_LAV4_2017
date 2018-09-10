import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { JuegoHitIt } from '../../clases/juego-hit-it'

@Component({
  selector: 'app-hit-it',
  templateUrl: './hit-it.component.html',
  styleUrls: ['./hit-it.component.css']
})
export class HitItComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  nuevoJuego: JuegoHitIt;

  constructor() {
    this.nuevoJuego = new JuegoHitIt();
  }

  generarValor() {
    this.nuevoJuego.generarValor();
  }

  verificar() {
    if (this.nuevoJuego.verificar()) {
      this.nuevoJuego.nivel++;
    } else {
      alert('Perdiste! Llegaste al nivel '+this.nuevoJuego.nivel);
      this.nuevoJuego.nivel = 1;
    }
    this.generarValor();
    this.nuevoJuego.valorIngresado = '';
  }

  ngOnInit() {
    this.generarValor();
  }

}
