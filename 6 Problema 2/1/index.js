// 1. Craer un sistema para mostrar las particularidades de 3 celulares.
// 2. Cada celular debe tener peso, color, resolucionde pantalla, resolucion de camara y memoria ram.
// 3. Cada celular debe poder reiniciar, prender, apagar, tomar fotos y grabar.

class Celulares {
    constructor(peso, color, res_pant, res_cam, ram) {
        this.peso = peso;
        this.color = color;
        this.res_pant = res_pant;
        this.res_cam = res_cam;
        this.ram = ram;
        this.encendido = false;
        this.apagado = true;
    }
    prender() {
        if (this.apagado == true && this.encendido == false) {
            this.encendido = true;
            this.apagado = false;
            alert('Encendiendo...');
        } else if (this.apagado == false && this.encendido == true) {
            alert('El dispositivo ya esta encendido');
        }
    }
    info_celu() {
        document.write(
            `El celular tiene:<br>
            - Peso: ${this.peso}kg <br>
            - Color: ${this.color} <br>
            - Resolucion de pantalla: ${this.res_pant}px <br>
            - Resolucion de camara ${this.res_cam}px <br>
            - Memoria RAM: ${this.ram}gb <br><br>`
        );
    }
    reiniciar() {
        if (this.apagado == false && this.encendido == true) {
            alert('Reiniciando...');
        } else if (this.apagado == true && this.encendido == false) {
            alert('Tienes que encender el dispositivo antes de reiniciarlo.');
        }
    }
    tomar_foto() {
        if (this.apagado == false && this.encendido == true) {
            alert('Tomando foto...');
        } else if (this.apagado == true && this.encendido == false) {
            alert('Tienes que encender el dispositivo antes de tomar una foto.');
        }
    }
    grabar() {
        if (this.apagado == false && this.encendido == true) {
            alert('Grabando...');
        } else if (this.apagado == true && this.encendido == false) {
            alert('Tienes que encender el dispositivo antes de tomar una foto.');
        }
    }
    apagar() {
        if (this.apagado == false && this.encendido == true) {
            alert('Apagando...');
            this.encendido = false;
            this.apagado = true;
        } else if (this.apagado == true && this.encendido == false) {
            alert('El dispositivo ya esta apagado.');
        }
    }
}

const celu1 = new Celulares(140, 'Rojo', 480, 1080, 12);
const celu2 = new Celulares(148, 'Blanco', 720, 1080, 8);
const celu3 = new Celulares(170, 'Verde', 1080, 720, 6);

celu1.info_celu();
celu2.info_celu();
celu3.info_celu();