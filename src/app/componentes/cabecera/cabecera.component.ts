import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  miServiceLogin: LoginService;
  nombre:string=''

  constructor(loginService: LoginService) {
    this.nombre = localStorage.getItem('nombre');
    this.miServiceLogin = loginService;
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('nombre');
    this.nombre='';
    this.miServiceLogin.logout();
    location.reload();
  }
}
