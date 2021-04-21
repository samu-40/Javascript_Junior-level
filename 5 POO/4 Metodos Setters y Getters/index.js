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
        super(especie, edad, color);
        this.raza = null;
    }

    // Los metodos Getters permiten pedir un valor y los Setters modificar o cambiar un valor.

    // Setters: palabra reservada set
    set setRaza(newRaza) {
        this.raza = newRaza;
    }

    // Getters: palabra reservada get
    get getRaza() {
        return this.raza;
    }
}

const perro = new Perro('perro', 5, 'marron');
const gato = new Animal('gato', 4, 'blanco');
const loro = new Animal('loro', 10, 'rojo');


perro.setRaza = 'Doberman' + '<br>'; // para llamar al metodo tenemos que hacerlo como si fuera una variable del constructor y espesificar el nuevo valor.
document.write(perro.raza);


let razaPerro = perro.getRaza; //se llama igual que los setters.
document.write(razaPerro);