// Los arrays son variables que contienen varios datos sin impotar su tipo.
// Para dfinir un array debemos usar [], de esta manera el editor se da cuenta de que esto es un array.
// Para separar los elementos del array debemos usar la coma.

let array = ['hola', 105, true];

// Podemos mostrar todos o uno de los elemnetos de un array con document.write (en la hoja del documento HTML) o con console.log() (en la consola del navegador). Pero antes debemos saber que cada elemento dentro de un array tiene una posicion, el primer elemento tiene la posicion 0, el segundo la posicion 1 y asi sucesivamente.
//               0        1       2
let frutas = ['banana', 'pera', 'uva'];

// Entonces para acceder a todos los elementos llamamos al array por su nombre (frutas).
document.write(frutas);

// Para acceder a solo un elemento debemos llamar al array por su nombre, colocar despues [] poner dentro de estos la posicion del elemento a seleccionar.
document.write(' ' + frutas[2]);