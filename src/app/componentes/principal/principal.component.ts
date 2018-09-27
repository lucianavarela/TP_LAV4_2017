import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() {}

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  ngOnInit() { }

}
