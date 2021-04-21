// Los metodos de arrays  nos permiten modificar los arrays sin necesidad de hacer procedimientos tan complejos.

let array = ['pedro', 'maria', 'jose', 'juan'];
// .pop nos permite eliminar el ultimo elemento del array y nos muestra el elemento eliminado.
document.write(array + '<br>');
let res = array.pop();
document.write(res + '<br>');
document.write(array + '<br><br>');

let array2 = ['pedro', 'maria', 'jose', 'juan'];
// .shift nos permite eliminar el primer elemento del array y nos muestra el elemento eliminado.
document.write(array2 + '<br>');
let res2 = array2.shift();
document.write(res2 + '<br>');
document.write(array2 + '<br><br>');

let array3 = ['pedro', 'maria', 'jose', 'juan'];
// .push nos permite agrgar un elemento despues del ultimo elemento del array, devuelve la cantidad de elementos del array actual.
document.write(array3 + '<br>');
let res3 = array3.push('samuel', 'andres'); // se puede pasar mas de un elemento.
document.write(res3 + '<br>');
document.write(array3 + '<br><br>');

let array4 = [1, 2, 3, 4, 5];
// .reverse nos permite invertir el orden del array.
document.write(array4 + '<br>');
let res4 = array4.reverse();
document.write(res4 + '<br><br>');

let array5 = [4, 5, 6];
// .unshift nos permite agregar uno o varios elementos al inicio de un array y devuelve el tamaño del array.
document.write(array5 + '<br>');
let res5 = array5.unshift(1, 2, 3);
document.write(res5 + '<br>');
document.write(array5 + '<br><br>');

let array6 = [1, 9, 8, 4, 3, 6, 2, 5, 7];
let array6_1 = ['Samuel', 'Alberto', 'Juan', 'Maria'];
// .sort nos permite ordenar alfabeticamente (en caso de letras) y numericamente(en caso de numeros) array.
document.write(array6 + '<br>');
document.write(array6_1 + '<br>');
let res6 = array6.sort();
let res6_1 = array6_1.sort();
document.write(res6 + '<br>');
document.write(res6_1 + '<br><br>');

let array7 = ['Hola', '¿Como', 'Estas?', 'Yo', 'Estoy', 'Muy', 'Muy', 'Muy', 'Bien'];
// .splice nos permite eliminar un/os elementos especificos del array, tambien podemos reemplazar esos elementos elminados por cualquier elemento que queramos. 
document.write(array7 + '<br>');
let res7 = array7.splice(5, 4, 'Mal', 'Terrible'); // el primer parametro es desde donde vas a empezar a borrar, el segundo es cuantos elementos vas a borrar +1 porque tambien elimina la posicion del elemnto donde inicia el borrado (primer parametro) y el ultimo parametro es opcional y es para especificar con que elementos queremos rellenar esas posiciones que borramos (puede ser mas de un elemento).
document.write(res7 + '<br>');
document.write(array7 + '<br><br>');

let array8 = ['Samuel', 'Alberto', 'Juan', 'Maria'];
// .join nos permite unir un array para convertirlo en un string, pero si especificamos el lo parametros un valor, los elementos de este se van a separar por ese valor y se convertira todo a un string.
document.write(array8 + '<br>');
document.write(array8[0] + '<br>'); // primer elemento del array
let res8 = array8.join(' - '); // se separan los elememtos por esto
document.write(res8[0] + '<br>'); // primer elemento del string
document.write(res8 + '<br><br>'); // resulltado final => un string separado por ' - '

let array9 = ['Samuel', 'Alberto', 'Juan', 'Maria'];
// .slice nos permite crear un nuevo array apartir del array anterior, le especificamos de que posicion del array original arranca y cuantos elementos va a colocar en el nuevo array (incluido el elemnto que tomo como inicio).
document.write(array9 + '<br>');
let res9 = array9.slice(0, 2);
document.write(res9 + '<br><br>');

// Para los arrays tambien funcionan los metodos de cadena como: toString(), indexOf(), lastIndexOf(), includes() y length().

let array10 = ['Samuel', 'Alberto', 'Juan', 'Maria', 'Jose', 'Jesus'];
// .forEch permite hacer un blucle donde declaramos una variable (en este caso numero) que cada vez que se ejecute el bucle va a guardar un elemento del array (el bucle va en orden, es decir, de indice 0 hasta indice final del array.)
let i = 0; // esto es para mostrar porque vuelta el bucle.
document.write(array10 + '<br>');
array10.forEach(numero => document.write(`Vuelta ${i++}, numero es el elemento = ${numero} <br>`));
document.write('<br><br>');

let array11 = ['Samuel', 'Alberto', 'Juan', 'Maria', 'Jose', 'Jesus'];
// .filter hace exactamente lo mismo que .forEch, con la unica diferencia de que en .filter podemos usar condicionales mientras que en .forEch no.
document.write(array11 + '<br>');
let resultado = array11.filter(numero => numero.length >= 5);
document.write(resultado);