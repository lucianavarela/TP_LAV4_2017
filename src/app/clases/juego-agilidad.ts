import { Juego } from "../clases/juego";

export class JuegoAgilidad extends Juego {
    numeroUno: number = 0;
    numeroDos: number = 0;
    operador: string = '';
    respuestaUser: number = null;
    nivel:number = 1;
    tiempo_total: number = 0;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Math Speed", gano, jugador);
    }
    public verificar() {
        let valor;
        switch (this.operador) {
            case '+':
                if (this.numeroUno + this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                valor = this.numeroUno + this.numeroDos;
                break;
            case '-':
                if (this.numeroUno - this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                valor = this.numeroUno - this.numeroDos;
                break;
            case '*':
                if (this.numeroUno * this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                valor = this.numeroUno * this.numeroDos;
                break;
            case '/':
                if (this.numeroUno / this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                valor = this.numeroUno / this.numeroDos;
                break;
            default:
                valor = null;
        }
        return valor;
    }
    public generarValores() {
        let operador = Math.floor((Math.random() * 4) + 1);
        if (operador <= 1) {
            this.operador = '+';
        } else if (operador <= 2) {
            this.operador = '-';
        } else if (operador <= 3) {
            this.operador = '*';
        } else {
            this.operador = '/';
        }
        this.numeroUno = Math.floor((Math.random() * 100) + 1);
        if (this.operador == '/' || this.operador == '*') {
            this.numeroDos = Math.floor((Math.random() * 5) + 1);
        } else {
            this.numeroDos = Math.floor((Math.random() * 100) + 1);
        }
    }
}
