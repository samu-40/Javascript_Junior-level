// Estos metodos nos permiten seleccionar elementos del DOM (Document Object Model, es decir, todo lo que contiene el documento html).

// .getElementById() seleccina el elemento que posea el id especificado.
let id = document.getElementById('parrafo'); // lo seleccionamos.
document.write(id + '<br>'); // muestra el tipo de elemento mas no su valor.

// .getElementsByTagName() selecciona todos los elementos (etiquetas) especificados, devuelve un lista de elementos HTML.
let tag = document.getElementsByTagName('p');
document.write(tag + '<br>');
console.log(tag);

// .querySelector() selecciona el primer elemento que coincida con el selector especificado.
let query = document.querySelector('.parrafo');
document.write(query + '<br>');

// .querySelectorAll() selecciona todos los elemento que coincida con el selector especificado, devuelve una lista de nodos.
let queryAll = document.querySelectorAll('.parrafo');
document.write(queryAll);

// La lista de elementos HTML y la lista de nodos no son arrays.