import { Component, OnInit, Input } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public myapp: string = "";
  public misJuegos: Array<string>;
  public listadoParaCompartir: Array<any>;
  miServicioJuego: JuegoServiceService;
  contador: number = 0;

  contadorTotal() {
    this.contador++;
  }

  llamaService() {
    console.log("llamaService");
    this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa() {
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
      this.listadoParaCompartir = listado;
    });
  }

  ngOnInit() {
    this.misJuegos = ['TicTacToe', 'Hit It!', 'Anagram', 'Math Speed', 'Rock Paper Scissors', 'Guess The Number'];
  }
}
