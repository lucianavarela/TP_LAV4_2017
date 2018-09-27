import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario: string = '';
  clave: string = '';
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
    let objeto: { usuario: string, clave: string } = {
      usuario: this.usuario,
      clave: this.clave
    }
    this.miServiceLogin.login('login/', objeto);
  }

  login() {
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
  }
}
