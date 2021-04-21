// El objeto Math nos permite realizar operaciones matematicas. Siempre antes de poner cualquier funcion del objeto Math debemos poner 'Math.' antes de la funcion:

// .sqrt es para calcular la raiz cuadrada de un numero.
let raiz_cua = Math.sqrt(25);
document.write(raiz_cua + '<br><br>');

// .cbrt es para calcular la raiz cubica de un numero.
let raiz_cub = Math.cbrt(27);
document.write(raiz_cub + '<br><br>');

// .max es para saber cual es el mayor de vario numeros (solo funciona con numeros).
let max = Math.max(27, 30, 2, 190, 1000, 8, 455);
document.write(max + '<br><br>');

// .min es el opuesto a .max
let min = Math.min(27, 30, 2, 190, 1000, 8, 455);
document.write(min + '<br><br>');

// .round permite redondear un numero
let round = Math.round(25.487645);
document.write(round + '<br><br>');

// .random devuelve un numero aleatorio entre 0 y 1 (nunca va a ser 0 o 1).
let random = Math.random();
document.write(random + '<br>');
// podemos hacer que el random muestre nuemros entre 0 y 100 utilizando una multiplicacion y .round para hacerlo ver mas limpio.
let random2 = Math.round(random * 100); // de esta manera movemos la coma 2 espacios hacia la derecha y redondeamos el numero final.
document.write(random2 + '<br><br>');

// .floor permite redondear un numero, siempre para abajo
let floor = Math.floor(25.99999);
document.write(floor + '<br><br>');

// .trunc permite eliminar los decimales de un numero
let trunc = Math.trunc(25.99);
document.write(25.99 + '<br>')
document.write(trunc + '<br><br>');

// .PI muestra el numero PI
let pi = Math.PI;
document.write(pi + '<br><br>');

// .SQRT1_2 muestra la raiz cuadrada de 1/2
let SQRT1_2 = Math.SQRT1_2;
document.write(SQRT1_2 + '<br><br>');

// .SQRT2 muestra la raiz cuadrada de 2
let SQRT2 = Math.SQRT2;
document.write(SQRT2 + '<br><br>');

// .E muestra la constante de euler (la base de los logaritmos naturales)
let E = Math.E;
document.write(E + '<br><br>');

// .LN2 muestra el logaritmo natural de 2
let LN2 = Math.LN2;
document.write(LN2 + '<br><br>');

// .LN10 muestra el logaritmo natural de 10
let LN10 = Math.LN10;
document.write(LN10 + '<br><br>');

// .LOG2E muestra el logaritmo de E con base 2
let LOG2E = Math.LOG2E;
document.write(LOG2E + '<br><br>');

// .LOG10E muestra el logaritmo de E con base 10
let LOG10E = Math.LOG10E;
document.write(LOG10E);