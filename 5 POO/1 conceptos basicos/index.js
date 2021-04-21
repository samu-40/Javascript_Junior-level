// Las clases son objetos, dentro de ellas podemos craer determniandas aciones y guardar varios tipos de variables, apartir de estos podemos crear distintos tipos de clases como veremos a continuacion:

// La sintaxis es:
//  class nombre {
//      constructor(){
//          variables...
//      }
//      metodos{
//          acciones...
//      }
//  }

// Ej:

class Animal {
    // El constructor hace referencia a aquellas caracteristicas de una clase (sus varaibles).
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad; // this hace referencia a la clase, ver cuando se llama a la clase para entender.
        this.color = color;
        // "this.especie" no es lo mismo que el parametro "especie", sino que es el nombre de la variable que almacena el parametro  "especie", ¿Como asi?, "this.especie" lo puedo llamar como "this.esp", es solo el nombre de la varaible.
    };
    // Los metodos son acciones que realiza la clase (funciones comunes, no se pueden usar funciones flecha).
    saludar() { //en los metedos no hace falta poner "this." solo cuando los vamos llamar.
        document.write(
            `Hola, soy un ${this.especie}, tengo ${this.edad} años de edad y soy de color ${this.color} <br>`
        );
    };
};


const perro = new Animal('Perro', 5, 'Marron');
const gato = new Animal('gato', 4, 'blanco'); // de esta forma creamos clases.
const loro = new Animal('loro', 10, 'rojo');

// cuando llamamos a algun metodo o variable de la clase lo unico que tenemos que poner es el nombre de la clase, un punto y despues el metodo o la varaible que queremos ver y/o ejecutar. "perro.saludar()" es igual que si pusieramos "this.saludar()", solo que cuando se declaran las variables en el constructor, como no sabemos como se va a llamar la clase ponemos "this(esto)" haciendo referencia a la clase.
perro.saludar();
gato.saludar();
loro.saludar();