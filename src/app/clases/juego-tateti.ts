import { Juego } from "./juego";

export class JuegoTaTeTi extends Juego {
    spot1: string = '';
    spot2: string = '';
    spot3: string = '';
    spot4: string = '';
    spot5: string = '';
    spot6: string = '';
    spot7: string = '';
    spot8: string = '';
    spot9: string = '';

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("TaTeTi", gano, jugador);
    }

    public botPlays() {
        let continuar = true;
        do {
            let position = Math.floor((Math.random() * 9) + 1);
            if (position == 1 && this.spot1 == '') {
                this.spot1 = 'circle';
                continuar = false;
            } else if (position == 2 && this.spot2 == '') {
                this.spot2 = 'circle';
                continuar = false;
            } else if (position == 3 && this.spot3 == '') {
                this.spot3 = 'circle';
                continuar = false;
            } else if (position == 4 && this.spot4 == '') {
                this.spot4 = 'circle';
                continuar = false;
            } else if (position == 5 && this.spot5 == '') {
                this.spot5 = 'circle';
                continuar = false;
            } else if (position == 6 && this.spot6 == '') {
                this.spot6 = 'circle';
                continuar = false;
            } else if (position == 7 && this.spot7 == '') {
                this.spot7 = 'circle';
                continuar = false;
            } else if (position == 8 && this.spot8 == '') {
                this.spot8 = 'circle';
                continuar = false;
            } else if (position == 9 && this.spot9 == '') {
                this.spot9 = 'circle';
                continuar = false;
            }
        } while (continuar);
    }

    public verificar() {
        if (this.spot1 == this.spot4 && this.spot4 == this.spot7 && this.spot7 != '') {
            this.gano = this.spot1 == 'cross';
            return true;
        } else if (this.spot2 == this.spot5 && this.spot5 == this.spot8 && this.spot8 != '') {
            this.gano = this.spot2 == 'cross';
            return true;
        } else if (this.spot3 == this.spot6 && this.spot6 == this.spot9 && this.spot9 != '') {
            this.gano = this.spot3 == 'cross';
            return true;
        } else if (this.spot1 == this.spot5 && this.spot5 == this.spot9 && this.spot9 != '') {
            this.gano = this.spot1 == 'cross';
            return true;
        } else if (this.spot3 == this.spot5 && this.spot5 == this.spot7 && this.spot7 != '') {
            this.gano = this.spot3 == 'cross';
            return true;
        } else if (this.spot1 == this.spot2 && this.spot2 == this.spot3 && this.spot3 != '') {
            this.gano = this.spot1 == 'cross';
            return true;
        } else if (this.spot4 == this.spot5 && this.spot5 == this.spot6 && this.spot6 != '') {
            this.gano = this.spot4 == 'cross';
            return true;
        } else if (this.spot7 == this.spot8 && this.spot8 == this.spot9 && this.spot9 != '') {
            this.gano = this.spot7 == 'cross';
            return true;
        } else if (this.spot1 != '' && this.spot2 != '' && this.spot3 != '' && this.spot4 != '' &&
            this.spot5 != '' && this.spot6 != '' && this.spot7 != '' && this.spot8 != '' && this.spot9 != '') {
            this.gano = false;
            return true;
        }
        return false;
    }

    public reset() {
        this.gano = false;
        this.spot1 = '';
        this.spot2 = '';
        this.spot3 = '';
        this.spot4 = '';
        this.spot5 = '';
        this.spot6 = '';
        this.spot7 = '';
        this.spot8 = '';
        this.spot9 = '';
    }
}
