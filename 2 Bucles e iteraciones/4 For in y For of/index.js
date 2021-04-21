// For in nos permite recorrer una array y guardar la posicion de cada elemento en una variable:

let animales = ['Gato', 'Perro', 'Loro'];

// animal es la variable

document.write('<u>For in:</u>' + '<br>');
for (animal in animales) {
    document.write(animal + '<br>');
}

document.write('<br>');

for (animal in animales) {
    document.write(`${animales[animal]} <br>`);
}

// Esta es una forma para mostrar el valor de cada elemento, pero para eso esta For of.

// For of hace lo mismo que for in, pero no guarda la posicion sino el valor:

document.write('<br>');

document.write('<u>For of:</u>' + '<br>');
for (animal of animales) {
    document.write(animal + '<br>');
}