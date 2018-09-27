import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera;
  isEnd: boolean = false;
  juegoService: JuegoServiceService;

  constructor(juegoService: JuegoServiceService) {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    this.juegoService = juegoService;
  }

  verificar(option) {
    this.nuevoJuego.userOption = option;
    this.nuevoJuego.genBotOption();
    this.nuevoJuego.verificar();
    if (this.nuevoJuego.gano) {
      this.nuevoJuego.nivel++;
    } else if (this.nuevoJuego.gano != null) {
      if (this.nuevoJuego.nivel > 1) {
        this.register();
      }
      this.nuevoJuego.nivel = 1;
    }
    this.isEnd = true;
  }

  ngOnInit() {
  }

  closeModal() {
    this.isEnd = false;
  }

  start() {
    this.nuevoJuego.userOption = '';
  }

  register() {
    let objeto: { juego: string, nivel: number, tiempo: number } = {
      juego: 'Rock Paper Scissors',
      nivel: this.nuevoJuego.nivel,
      tiempo: 0
    }
    this.juegoService.cargar(objeto);
  }
}
