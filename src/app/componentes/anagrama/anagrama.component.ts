import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  nuevoJuego: JuegoAnagrama;
  isEnd: boolean = false;
  chars_in_secretword: Array<string>;
  juegoService: JuegoServiceService;

  constructor(juegoService: JuegoServiceService) {
    this.nuevoJuego = new JuegoAnagrama();
    this.juegoService = juegoService;
  }

  generarPalabra() {
    this.nuevoJuego.generarPalabra();
    this.chars_in_secretword = this.shuffle(this.nuevoJuego.palabraSecreta.split(''));
  }

  verificar() {
    this.isEnd = true;
    this.nuevoJuego.verificar();
    if (this.nuevoJuego.gano) {
      this.nuevoJuego.nivel++;
    } else {
      if (this.nuevoJuego.nivel > 1) {
        this.register();
      }
      this.nuevoJuego.nivel = 1;
    }
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

  register() {
    let objeto: { juego: string, nivel: number, tiempo: number } = {
      juego: 'anagram',
      nivel: this.nuevoJuego.nivel,
      tiempo: 0
    }
    this.juegoService.cargar(objeto);
  }
}
