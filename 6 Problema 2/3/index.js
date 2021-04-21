// 1. Craer un sistema que ayude a decidir cual es la app perfecta entre 2 apps.
// 2. La informacion de los instaladores debe tener la cantidad de descargas, la puntuacion y el peso.
// 3. Las apps se deben poder desinstalar, instalar, abrir y cerrar.

class Apps {
    constructor(cant_des, punt, peso) {
        this.cant_des = cant_des;
        this.punt = punt;
        this.peso = peso;
        this.abierto = false;
        this.cerrado = true;
        this.instalado = false;
        this.desintalado = true;
    }
    instalar() {
        if (this.instalado == false && this.desintalado == true) {
            alert('Instalando...');
            this.instalado = true;
            this.desintalado = false;
        } else if (this.instalado == true && this.desintalado == false) {
            alert('Ya tienes la app instalada');
        }
    }
    desinstalar() {
        if (this.instalado == true && this.desintalado == false) {
            alert('Desinstalando...');
            this.instalado = false;
            this.desinstalado = true;
        } else if (this.instalado == false && this.desintalado == true) {
            alert('No puedes desintalar algo que no tienes instalado.');
        }
    }
    abrir() {
        if (this.instalado == true && this.desintalado == false) {
            if (this.abierto == false && this.cerrado == true) {
                alert('Abriendo app...');
                this.abierto = true;
                this.cerrado = false;
            } else if (this.abierto == true && this.cerrado == false) {
                alert('Esta app ya esta abierta.');
            }
        } else if (this.instalado == false && this.desintalado == true) {
            alert('Tienes que instalar la aplicacion para abrirla.');
        }
    }
    cerrar() {
        if (this.instalado == true && this.desintalado == false) {
            if (this.abierto == true && this.cerrado == false) {
                alert('Cerrando app...');
                this.abierto = false;
                this.cerrado = true;
            } else if (this.abierto == false && this.cerrado == true) {
                alert('Esta app ya esta cerrada.');
            }
        } else if (this.instalado == false && this.desintalado == true) {
            alert('Tienes que instalar la aplicacion para cerrarla.');
        }
    }
    info_app() {
        return `- Cantidad de descargas: ${this.cant_des} <br>
                - Puntuacion: ${this.punt} stars <br>
                - Peso: ${this.peso} <br><br>`;
    }
}

const app1 = new Apps('3M', 5, '100mb');
const app2 = new Apps('1M', 4, '150mb');

document.write(app1.info_app());
document.write(app2.info_app());