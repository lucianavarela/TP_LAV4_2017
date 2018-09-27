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
  resultados: any;

  constructor (miServicioJuego: JuegoServiceService) {
    this.miServicioJuego = miServicioJuego;
  }

  llamaService() {
    this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa() {
    this.miServicioJuego.listarPromesa().then((listado) => {
      this.listadoParaCompartir = listado;
    });
  }

  ngOnInit() {
    this.traerTodos('');
  }

  traerTodos(filtro:string) {
    this.miServicioJuego.traerTodos(filtro).then(data => {
      this.resultados = data;
    })
  }
}
