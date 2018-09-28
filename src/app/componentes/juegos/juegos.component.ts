import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  miRoute: Router;

  constructor(route: Router) {
    this.miRoute = route;
  }

  ngOnInit() {
    if (!localStorage.getItem('nombre')) {
      this.miRoute.navigate(['/Principal']);
    }
  }

}
