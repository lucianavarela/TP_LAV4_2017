import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  peticion: any;
  miRoute: Router;

  constructor(
    private route: Router,
    public miHttp: MiHttpService
  ) {
    this.miRoute = route;
  }

  public signup(ruta, objeto) {
    return this.miHttp.httpPostP(this.miHttp.api + ruta, objeto).subscribe(
      success => {
        this.peticion = success;
        this.miHttp.updateTokenHeaders(this.peticion['token']);
        localStorage.setItem('nombre', this.peticion['nombre']);
        this.miRoute.navigate(['/Principal']);
      }, error => {
        this.miRoute.navigate(['/Login']);
      });
  }

  public login(ruta, objeto) {
    return this.miHttp.httpPostP(this.miHttp.api + ruta, objeto).subscribe(
      success => {
        this.peticion = success;
        this.miHttp.updateTokenHeaders(this.peticion['token']);
        localStorage.setItem('nombre', this.peticion['nombre']);
        this.miRoute.navigate(['/Principal']);
      }, error => {
        this.miRoute.navigate(['/Login']);
      });
  }

  public logout() {
    this.miHttp.updateTokenHeaders('');
  }
}