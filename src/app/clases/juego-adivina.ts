import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
    numeroSecreto: number = null;
    numeroIngresado;
    
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Guess the number", gano, jugador);
    }
    public verificar() {
        this.gano = this.numeroIngresado == this.numeroSecreto;
        return this.gano;
    }

    public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        this.gano = false;
    }
    
    public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "More!";
        } else {
            return "Less!";
        }
    }
}
