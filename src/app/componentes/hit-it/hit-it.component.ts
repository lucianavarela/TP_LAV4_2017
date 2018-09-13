import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { JuegoHitIt } from '../../clases/juego-hit-it'

@Component({
  selector: 'app-hit-it',
  templateUrl: './hit-it.component.html',
  styleUrls: ['./hit-it.component.css']
})
export class HitItComponent {

  nuevoJuego: JuegoHitIt;
  isEnd: boolean = false;
  timeleft: number = 0;
  milliseconds: number = 500;
  interval: any;
  mensajeLooser: string = '';

  constructor() {
    this.nuevoJuego = new JuegoHitIt();
  }

  generarValor() {
    this.nuevoJuego.generarValor();
  }

  verificar() {
    if (this.nuevoJuego.verificar()) {
      this.nuevoJuego.nivel++;
      if (this.nuevoJuego.nivel > 5 && this.nuevoJuego.nivel < 15) {
        this.milliseconds = Math.round(this.milliseconds * 0.95);
      } else if (this.nuevoJuego.nivel >= 15) {
        this.milliseconds = Math.round(this.milliseconds * 0.95);
      }
      this.generarValor();
      this.startCountdown();
    } else {
      this.isEnd = true;
      this.mensajeLooser = 'Value was ' + this.nuevoJuego.valorRandom;
      clearInterval(this.interval);
      this.nuevoJuego.valorRandom = '';
    }
    this.nuevoJuego.valorIngresado = '';
  }

  startCountdown() {
    this.timeleft = this.milliseconds;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.timeleft--;
      if (this.timeleft <= 0) {
        this.isEnd = true;
        this.mensajeLooser = 'Out of Time!';
        clearInterval(this.interval);
        this.nuevoJuego.valorRandom = '';
      };
    }, 10);
  };
  
  start() {
    this.milliseconds = 500;
    this.generarValor();
    this.startCountdown();
    //this.htmlInput.nativeElement.focus();
  }
  
  closeModal() {
    this.isEnd = false;
  }
}