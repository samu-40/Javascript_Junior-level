// Podemos trabajar con las clases de los elementos desde JS, para ello debamos poner (element).classList.(metodo)

// .add() permite agregar una clase al elemento
let titulo = document.querySelector('.titulo');
titulo.classList.add('grande');

// .remove() permite eliminar una clase del elemento
let titulo2 = document.querySelector('.titulo2');
titulo2.classList.remove('remove');

// .item() permite mostrar el valor de una clase de un elemento, dependiendo de su indice.
let titulo3 = document.querySelector('.titulo3');
let clase = titulo3.classList.item(1);
console.log(clase);

// .contains() permite verificar si un elemento tiene o no la clase especificada, devuelve true o false  .
let titulo4 = document.querySelector('.titulo4');
let clase2 = titulo4.classList.contains('eso');
console.log(clase2);

// .toggle() permite verificar si un elemento tiene o no la clase especificada, si la tiene la remueve y si no la tiene la agrega.
let titulo5 = document.querySelector('.titulo5');
titulo5.classList.toggle('titulo5'); // aca elimina la clase, porque la tiene
let titulo5_1 = document.querySelector('.titulo5_1');
titulo5_1.classList.toggle('titulo5'); // aca agrega la clase, porque no la tiene

// .replace() permite reemplazar una clase por otra.
let titulo6 = document.querySelector('.titulo6');
titulo6.classList.replace('titulo6', 'titulo');