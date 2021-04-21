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

// La herencia le permite "heredar" a una clase todo lo que tiene otra clase. Ej:

class Perro extends Animal { // esta es la palabra reservada para usar la herencia, primero ponemos el nombre de  la nueva clase, luego la palabra 'extends' y por ulyimo la clase de la que va a heredar.

    constructor(especie, edad, color, raza) { // no hay necesidad de crear un constructor a menos que queramos agregar mas caracteristicas como en este ejemplo 'raza'.

        super(especie, edad, color); // si se crea el constructor con esta palabra reservada 'super' le decimos que tambien va a heredar las caracteristicas de la otra clase.
        this.raza = raza;
    }

    // los metodos tambien los hereda, pero de igual forma que en el constructor podemos agregar mas metodos.
    ladrar() {
        alert('¡WOAW!');
    }
}

const perro = new Perro('Perro', 5, 'Marron', 'Pitbull'); //aqui creamos la nueva clase (que heredo lo mismo que la clase anterior) y agregamos la nueva caracteristica 'raza'.

const gato = new Animal('gato', 4, 'blanco');
const loro = new Animal('loro', 10, 'rojo');


perro.ladrar(); // aqui llamamos a la nuevo metodo.
perro.saludar(); //podemos acceder a los metodos de la clase Animal.
document.write(perro.edad); //tambien a las caracteristicas.