import { Component, ChangeDetectorRef } from '@angular/core';
import { JuegoHitIt } from '../../clases/juego-hit-it';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-hit-it',
  templateUrl: './hit-it.component.html',
  styleUrls: ['./hit-it.component.css']
})
export class HitItComponent {

  nuevoJuego: JuegoHitIt;
  isEnd: boolean = false;
  timeleft: number = 0;
  milliseconds: number = 5000;
  interval: any;
  mensajeLooser: string = '';
  juegoService: JuegoServiceService;

  constructor(private cdr: ChangeDetectorRef, juegoService: JuegoServiceService) {
    this.nuevoJuego = new JuegoHitIt();
    this.juegoService = juegoService;
  }

  generarValor() {
    this.nuevoJuego.generarValor();
  }

  verificar() {
    this.nuevoJuego.tiempo_total += (this.milliseconds-this.timeleft);
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
      this.timeleft = 0;
      this.nuevoJuego.valorRandom = '';
      this.cdr.detectChanges();
      if (this.nuevoJuego.nivel > 1) {
        this.register();
      }
      this.nuevoJuego.tiempo_total = 0;
      this.nuevoJuego.nivel = 1;
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
    this.milliseconds = 5000;
    this.generarValor();
    this.startCountdown();
  }
  
  closeModal() {
    this.isEnd = false;
  }

  register() {
    let objeto: { juego: string, nivel: number, tiempo: number } = {
      juego: 'Hit It!',
      nivel: this.nuevoJuego.nivel,
      tiempo: this.nuevoJuego.tiempo_total
    }
    this.juegoService.cargar(objeto);
  }
}