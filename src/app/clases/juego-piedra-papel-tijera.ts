import { Juego } from "./juego";

export class JuegoPiedraPapelTijera extends Juego {
    userOption: string = '';
    botOption: string = '';

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Rock Paper Scissors", gano, jugador);
    }

    public verificar() {
        switch (this.botOption) {
            case 'Scissors':
                if (this.userOption == 'Rock') {
                    return true;
                } else if (this.userOption == 'Paper') {
                    return false;
                } else {
                    return null;
                }
            case 'Rock':
                if (this.userOption == 'Scissors') {
                    return false;
                } else if (this.userOption == 'Paper') {
                    return true;
                } else {
                    return null;
                }
            case 'Paper':
                if (this.userOption == 'Rock') {
                    return false;
                } else if (this.userOption == 'Scissors') {
                    return true;
                } else {
                    return null;
                }
            default:
                return false;
        }
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
