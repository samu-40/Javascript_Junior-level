// Las funciones sirven para ejecutar varias veces unas lineas de codigo sin necesidad de copiarlas todas de nuevo.
// La sintaxis es:

//  function nombre ( parametros(opcionales) ){
//      codigo...
//      return;
//  }

// ej:

function saludar() {
    respuesta = prompt('Hola samuel, ¿como te va?');
    if (respuesta == 'bien') {
        alert('que bueno');
    } else {
        alert('que mal');
    }
}

// Para poder volver a ejecutar esta funcion debemos llamarla por su nombre:

saludar();

// otra forma de hacer una funcion es asi:

let saluda = function() {
    respuesta = prompt('Hola samuel, ¿como te va?');
    if (respuesta == 'bien') {
        alert('que bueno');
    } else {
        alert('que mal');
    }
}

saluda();

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

document.write('<u>return:</u>' + '<br>');

// La funcion es un bloque de codigo que ejecuta unas instrucciones pero si la mostramos por pantalla esta va a ser undefined ya que como dijimos antes solo son lineas de codigo, siqueremos que al finalizar nos devuelva algun valor ya sea un numero, string, booleano, array, etc... debemos usar return, returnpermite que al finalizar la funcion retorne algo que nosotros le especifiquemos. Ej:

function palabra() {
    return 'gato';
}

let Palabra = palabra();

document.write(Palabra + '<br>');

document.write(palabra() + '<br>' + '<br>'); // otra forma de mostrar la funcion ya que retorna un valor.

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

document.write('<u>Parametros:</u>' + '<br>');

// En una fucion tambien existen los parametros, son variables que creamos para usar en el codigo y se tiene que pasar su valores al llamar a la fucion. Ej:

//            parametros
//           |----------|
function suma(num1, num2) {
    let res = num1 + num2;
    return document.write(res + '<br>' + '<br>');
}

suma(23, 66); // pasamos los valores.

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

document.write('<u>Funcion flecha:</u>' + '<br>')

//Existe otra forma de crear una fucion y es la funcion flecha, funciona igual que la funcion normal pero su sintaxis es diferente y el return tambien.

// Esta es una funcion normal:
// function nombre(parametros){
//     acciones...
//     return;
// }

// En la funcion flecha guardamos dentro de una variable const (o cualquier otra), con el nombre de la funcion, la funcion en si.

// const nombre = function(parametros){
//     acciones...
//     return
// }

// Luego quitamos la palabra function y despues del parentesis ponemos este signo => (flecha).

// const nombre = (parametros) => {
//     acciones...
//     return
// }

// Por ultimo eliminamos el return porque aqui el return ya es automatico, es decir, ya viene incluido.
// const nombre = (parametros) => {
//     acciones...
// }
// Asi queda una funcion flecha, esta es la sintaxis.

// Un ejemplo:

const resta = (num1, num2) => {
    let res = num1 - num2;
    document.write(res);
}

resta(12, 6);