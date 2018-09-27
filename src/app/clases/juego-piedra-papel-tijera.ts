import { Juego } from "./juego";

export class JuegoPiedraPapelTijera extends Juego {
    userOption: string = '';
    botOption: string = '';
    nivel: number = 1;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Rock Paper Scissors", gano, jugador);
    }

    public verificar() {
        switch (this.botOption) {
            case 'Scissors':
                if (this.userOption == 'Rock') {
                    this.gano = true;
                } else if (this.userOption == 'Paper') {
                    this.gano = false;
                } else {
                    this.gano = null;
                }
                break;
            case 'Rock':
                if (this.userOption == 'Scissors') {
                    this.gano = false;
                } else if (this.userOption == 'Paper') {
                    this.gano = true;
                } else {
                    this.gano = null;
                }
                break;
            case 'Paper':
                if (this.userOption == 'Rock') {
                    this.gano = false;
                } else if (this.userOption == 'Scissors') {
                    this.gano = true;
                } else {
                    this.gano = null;
                }
                break;
            default:
                this.gano = false;
                break;
        }
        
        return this.gano;
    }

    public genBotOption() {
        let random = Math.floor((Math.random() * 3) + 1);
        if (random == 1) {
            this.botOption = 'Rock';
        } else if (random == 2) {
            this.botOption = 'Paper';
        } else {
            this.botOption = 'Scissors';
        }
    }
}
