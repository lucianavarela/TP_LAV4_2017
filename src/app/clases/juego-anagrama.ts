import { Juego } from "./juego";

export class JuegoAnagrama extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Anagram", gano, jugador);
    }
    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }
    public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        this.gano = false;
    }
    public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    }
}
