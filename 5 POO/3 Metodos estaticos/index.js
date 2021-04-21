class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    };
    saludar() {
        document.write(
            `Hola, soy un ${this.especie}, tengo ${this.edad} años de edad y soy de color ${this.color} <br>`
        );
    };
};

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        this.raza = raza;
    }

    // static se utiliza en los metodos y sirve para poder ejecutar un metodo sin necesidad de crear la clase.
    static ladrar() {
        alert('¡WOAW!');
    }
    static saludo() {
        alert('Hola ¡WOAW!')
    }
}

const gato = new Animal('gato', 4, 'blanco');
const loro = new Animal('loro', 10, 'rojo');


Perro /*No definimos perro, estamos llamando es a la clase*/ .ladrar(); // se ejecuto porque el metodo es estatico
Perro.saludo();
document.write(Perro.edad); // si tratamos de acceder a esto no se va a poder porque no hemos creado la clase.