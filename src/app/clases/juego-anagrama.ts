import { Juego } from "./juego";

export class JuegoAnagrama extends Juego {
    palabraSecreta: string = '';
    palabraIngresada: string = '';
    nivel: number = 1;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Anagram", gano, jugador);
    }

    public verificar() {
        this.gano = this.palabraIngresada.toLowerCase() == this.palabraSecreta.toLowerCase();
        return this.gano;
    }

    public generarPalabra() {
        let random = Math.floor((Math.random() * this.lista_palabras.length));
        this.palabraSecreta = this.lista_palabras[random];
        this.gano = false;
    }
    
    lista_palabras = ['acción','edad','aire','animal','respuesta','manzana','arte','bebé','espalda','bola','pelota','banco','cama','factura','pájaro','sangre','barco','cuerpo','hueso','libro','fondo','parte','bajo','caja','niño','hermano','edificio','negocio','llamada','capital','caso','estuche','gato','causa','céntimo','centro','siglo','oportunidad','cambio','cheque','niño','iglesia','círculo','ciudad','clase','curso','ropa','nube','costa','color','empresa','consonante','copia','maíz','algodón','país','campo','curso','vaca','multitud','día','diccionario','dirección','distancia','médico','dólar','puerta','oreja','tierra','huevo','energía','ejemplo','experiencia','ojo','juego','partido','jardín','carburante','chica','niña','vidrio','vaso','oro','gobierno','hierba','césped','grupo','pelo','mano','sombrero','cabeza','corazón','calor','calefacción','historia','agujero','hueco','casa','hogar','caballo','hora','casa','hielo','idea','pulgada','industria','información','insecto','interés','hierro','plancha','isla','puesto','trabajo','llave','lago','tierra','idioma','ley','pierna','nivel','mentira','vida','luz','línea','lista','máquina','hombre','mapa','material','carne','medio','milla','leche','mente','minuto','dinero','mes','luna','boca','música','nación','noche','nariz','nota','número','objeto','océano','oficina','aceite','petróleo','página','par','papel','párrafo','parque','parte','fiesta','partido','pasado','persona','gente','libra','presidente','problema','producto','propiedad','pregunta','carrera','radio','lluvia','razón','récord','región','anillo','río','camino','roca','fila','regla','arena','escuela','ciencia','mar','asiento','segundo','frase','set','serie','lado','señal','signo','hermana','talla','tamaño','piel','nieve','soldado','solución','hijo','primavera','cuadrado','plaza','estrella','estado','parada','calle','estudiante','azúcar','sol','pueblo','vocal','guerra','tiempo','peso','esposa','ventana','invierno','mujer','palabra','mundo','año'];
}
