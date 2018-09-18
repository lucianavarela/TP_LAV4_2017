import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  nuevoJuego: JuegoAnagrama;
  isEnd: boolean = false;
  chars_in_secretword: Array<string>;

  constructor() {
    this.nuevoJuego = new JuegoAnagrama();
  }

  generarPalabra() {
    this.nuevoJuego.generarPalabra();
    this.chars_in_secretword = this.shuffle(this.nuevoJuego.palabraSecreta.split(''));
  }

  verificar() {
    this.isEnd = true;
    this.nuevoJuego.verificar();
  }

  ngOnInit() {
    this.generarPalabra();
  }

  start() {
    this.generarPalabra();
    this.nuevoJuego.palabraIngresada = '';
  }

  closeModal() {
    this.isEnd = false;
    this.nuevoJuego.gano = null;
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
