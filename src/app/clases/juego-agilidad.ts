import { Juego } from "../clases/juego";

export class JuegoAgilidad extends Juego {
    numeroUno: number = 0;
    numeroDos: number = 0;
    operador: string = '';
    respuestaUser: number = 0;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Math Speed", gano, jugador);
    }
    public verificar() {
        switch (this.operador) {
            case '+':
                if (this.numeroUno + this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                return this.numeroUno + this.numeroDos;
            case '-':
                if (this.numeroUno - this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                return this.numeroUno - this.numeroDos;
            case '*':
                if (this.numeroUno * this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                return this.numeroUno * this.numeroDos;
            case '/':
                if (this.numeroUno / this.numeroDos == this.respuestaUser) {
                    this.gano = true;
                } else {
                    this.gano = false;
                }
                return this.numeroUno / this.numeroDos;
            default:
                return null;
        }
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
        this.numeroDos = Math.floor((Math.random() * 100) + 1);
    }
}
