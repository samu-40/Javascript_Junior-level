// 1. Craer 2 celulares mas avanzados que los anteriores pero con las mismas caracteristicas y fuciones.
// 2. Los nuevos celulares pueden grabar en camara super lenta, hacer reconocimiento facial y tienen una camara extra.

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
        return `El celular tiene:<br>
                - Peso: ${this.peso}kg <br>
                - Color: ${this.color} <br>
                - Memoria RAM: ${this.ram}gb <br>
                - Resolucion de pantalla: ${this.res_pant}px <br>
                - Resolucion de camara ${this.res_cam}px <br>`;
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
};


class Celus_AltaGama extends Celulares {
    constructor(peso, color, res_pant, res_cam, ram, res_cam2) {
        super(peso, color, res_pant, res_cam, ram);
        this.res_cam2 = res_cam2;
    }
    grabar_lento() {
        if (this.apagado == false && this.encendido == true) {
            alert('Grabando super lento...');
        } else if (this.apagado == true && this.encendido == false) {
            alert('Tienes que encender el dispositivo antes de grabar super lento.');
        }
    }
    reco_facial() {
        if (this.apagado == false && this.encendido == true) {
            alert('Reconociendo rostro...');
        } else if (this.apagado == true && this.encendido == false) {
            alert('Tienes que encender el dispositivo antes de hacer un reconocimiento facial.');
        }
    }
    info_celuAG() {
        return this.info_celu() + `- Resolucion de camara extra: ${this.res_cam2}px <br><br>`;
    }
}

const celuAG1 = new Celus_AltaGama(170, 'Azul', 1080, 2040, 30, 1080);
const celuAG2 = new Celus_AltaGama(170, 'Blanco', 1080, 2040, 64, 4040);

document.write(celuAG1.info_celuAG() + celuAG2.info_celuAG());