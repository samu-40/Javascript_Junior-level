// Podemos obtener y modifacar elemntos con los siguientes metodos:

// .textContent, nos permite ver solo el contenido tipo texto del elemento, es decir, si hay otros elementos HTML (etiquetas) dentro del elemento, estas no se van a mostrar.
let parrafo = document.querySelector('.parrafo').textContent;
document.write(parrafo + '<br>'); // de esta forma vemos que muestra el contenido tipo texto, pero no muestra la etiqueta <b>
console.log(parrafo);

// .innerHTML, tambien muestra el texto que contiene el elemento, pero esta vez si toma el HTML que hay dentro de este.
let parrafo2 = document.querySelector('.parrafo2').innerHTML;
document.write(parrafo2);
console.log(parrafo2);

// .outerHTML, hace lo mismo que los metodos anteriores solo que esta vez muestra las etiquetas HTML del elemento seleccionado.
let parrafo3 = document.querySelector('.parrafo3').outerHTML;
document.write(parrafo3); // se separa de los document.write anteriores sin necesidad de un <br> porque ahora toma en cuenta la etiqueta <p> del elemento.
console.log(parrafo3);