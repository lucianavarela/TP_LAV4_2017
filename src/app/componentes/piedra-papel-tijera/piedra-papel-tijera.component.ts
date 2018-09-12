import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera;
  isEnd: boolean = false;

  constructor() {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

  verificar(option) {
    this.nuevoJuego.userOption = option;
    this.nuevoJuego.genBotOption();
    this.nuevoJuego.gano = this.nuevoJuego.verificar();;
    this.isEnd = true;
  }

  ngOnInit() {
  }

  closeModal() {
    this.isEnd = false;
  }

  start() {
    this.nuevoJuego.userOption='';
  }
}
