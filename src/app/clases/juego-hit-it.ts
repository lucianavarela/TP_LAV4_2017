import { Juego } from "./juego";

export class JuegoHitIt extends Juego {
    valorRandom: string = '';
    nivel: number = 1;
    valorIngresado: string = '';
    seconds: number = 0;
    milliseconds: number = 0;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Hit It!", gano, jugador);
    }

    public verificar() {
        this.gano = this.valorIngresado == this.valorRandom;
        return this.gano;
    }

    public timeRunOut() {
        this.gano = false;
        return this.gano;
    }

    public generarValor() {
        let mouseOptions = ['Right Click', 'Left Click'];
        let keyboardOptions = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '-'//, 'Shift', 'Alt', 'Space'
        ];
        let valorRandomForCategory = Math.floor((Math.random() * 5));
        let valorRandomK = Math.floor((Math.random() * keyboardOptions.length));
        this.valorRandom = keyboardOptions[valorRandomK];
        /*if (valorRandomForCategory) {
            let valorRandomK = Math.floor((Math.random() * keyboardOptions.length));
            this.valorRandom = keyboardOptions[valorRandomK];
        } else {
            let valorRandomM = Math.floor((Math.random() * 2));
            this.valorRandom = mouseOptions[valorRandomM];
        }*/
        this.gano = false;
    }
}
