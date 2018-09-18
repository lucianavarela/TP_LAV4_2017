import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { tryParse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})

export class ListadoDeResultadosComponent implements OnInit {
  @Output() sendContadorMayor = new EventEmitter();
  @Input() juegos: Array<string>;
  @Input() nombre:  string;
  dias: Array<string>;
  contadorDias:number=0;

  metodoContadorDias(dia:string) {
    let number:number = parseInt($('#'+dia).text().toString());
    $('#'+dia).text(number + 1);
    this.sendContadorMayor.emit();
  }

  constructor() { }

  ngOnInit() {
    this.dias=['Lunes', 'Martes','Miercoles', 'Jueves', 'Viernes'];
  }
}
