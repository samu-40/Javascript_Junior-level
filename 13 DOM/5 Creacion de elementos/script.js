const contenedor = document.querySelector('.contenedor');
const item = document.createElement('li'); // con este metodo creamos un elemento.
const text = document.createTextNode('Este es un item de la lista'); // con esto creamos un elemento texto.

console.log(item);
console.log(text);

item.appendChild(text); // .appendChild() sirve para agregar un elemento hijo dentro de un elemento padre.
contenedor.appendChild(item);

console.log(contenedor);



const contenedor1 = document.querySelector('.contenedor1');
const item1 = document.createElement('li');
item1.innerHTML = 'Este es un item de la lista'; // otra forma de crear texto de un elemento texto.
contenedor1.appendChild(item1);

// si quisieramos agregar 20 elementos li deberiamos ejecutar un bucle for para no escribir todo el proceso de nuevo, pero esto hace que se gasten muchos recursos por ende usamos esto:

const fragmento = document.createDocumentFragment(); // con este metodo creamos un fragmento del documento
const contenedor2 = document.querySelector('.contenedor2');

for (let i = 0; i < 20; i++) {
    const item2 = document.createElement('li'); // debemos incluir esto en el blucle ya que cada elemento es unico, asi que no podemos agregar un elemento varaias veces, hay que crearlo varias veces.
    item2.innerHTML = 'Este es un item de la lista';
    fragmento.appendChild(item2); // cada vez que el bucle se ejecute se va a guardar cada item en el fragmento
}

console.log(fragmento); // podemos ver como el fragmento contiene todos los items (comentar la linea 33 para poder verlo).

contenedor2.appendChild(fragmento); // una vez terminado el blucle lo que hacemos es poner dentro del contenedor el fragmento, de esta manera podemos ver en la consola como si el #document-fragment se hubiera vaciado y ahora todo el contenido lo tiene el contenedor, asi es como ahorramos recursos.