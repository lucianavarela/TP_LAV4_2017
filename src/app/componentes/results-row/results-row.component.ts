import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results-row',
  templateUrl: './results-row.component.html',
  styleUrls: ['./results-row.component.css']
})
export class ResultsRowComponent implements OnInit {
  @Output() sendContador = new EventEmitter<any>();
  @Input() juegos: Array<string>;
  @Input() nombre: string;
  @Input() dia: string;

  constructor() { }

  ngOnInit() { }

  addLike(dia: string) {
    this.sendContador.emit(dia);
  }
}