import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { LoginService } from '../../servicios/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  private subscription: Subscription;
  nombre: string = '';
  usuario: string = '';
  clave1: string = '';
  clave2: string = '';
  progreso: number = 0;
  progresoMensaje = "esperando...";
  logeando = true;
  miServiceLogin: LoginService;
  ProgresoDeAncho = "0%";

  constructor(loginService: LoginService) {
    this.miServiceLogin = loginService;
  }

  ngOnInit() { }

  Entrar() {
    let objeto: { nombre: string, usuario: string, clave: string } = {
      nombre: this.nombre,
      usuario: this.usuario,
      clave: this.clave1
    }
    this.miServiceLogin.signup('signup/', objeto);
  }

  signup() {
    if (this.clave1 === this.clave2) {
      $('.password').removeClass('is-danger');
      this.logeando = false;
      let timer = TimerObservable.create(200, 50);
      this.subscription = timer.subscribe(t => {
        this.progreso += 5;
        this.ProgresoDeAncho = this.progreso + '%';
        if (this.progreso == 100) {
          this.subscription.unsubscribe();
          this.Entrar();
        }
      });
    } else {
      $('.password').addClass('is-danger');
    }
  }
}
