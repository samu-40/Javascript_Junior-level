// Los metodos de cadenas (strings) nos permiten modificar la cadena sin necesidad de hacer procedimientos tan complejos.

let cadena = 'cadena de pueba';
let cadena2 = ' Si'
    // .concat nos permite agregar/concatenar otra cadena.
let res1 = cadena.concat(', Hola');
let res2 = cadena.concat(cadena2); // tambien le podemos pasar variables
document.write(res1 + '<br>');
document.write(res2 + '<br><br>');


let cadena3 = 'cadena de pueba';
// .startsWith nos permite saber si una cadena empieza con la palabra o letra especificada y devuelve un valor booleaneo.
let res3 = cadena3.startsWith('cadena'); //tambien funciona con variables.
document.write(res3 + '<br><br>');


let cadena4 = 'cadena de pueba';
// .endsWith hace lo mismo que su opuesto.
let res4 = cadena4.endsWith('prueba '); // el mas minimo cambio en la palabra especificada afecta el resultado, es decir, si ponemos la palabra con espacio o repetimos una letra 2 veces nos devolveria false porque es diferente (como en este caso).
document.write(res4 + '<br><br>');


let cadena5 = 'cadena de pueba';
// .includes tambien busca una cadena en la otra cadena solo que esta vez no le tenemos que especificar si esta al inicio o al final, busca la cadena en tada la cadena. Devuelve y tiene las mismas caractieristicas que los 2 metodos anteriores.
let res5 = cadena5.includes('de');
document.write(res5 + '<br><br>');


let cadena6 = 'cadena de prueba';
// .indexOf nos dice en que indice de la cadena utilizada se encuentra el comienzo de la cadena espesificada, es decir, en que indice comienza la palabra que le pasamos. Tambien cuentan los espacios como indices. No necesariamente tenemos que pasar una palabra tambie puede ser una letra.
let res6 = cadena6.indexOf('prueba');
document.write(res6 + '<br><br>'); // Si nos devuelve -1 quiere decir que la palabra o letra no se encuentra en la cadena.


let cadena7 = 'cadena de prueba prueba';
let res0_7 = cadena7.indexOf('prueba');
// .lastIndexOf hace lo mismo que indexOf, pero con la diferencia de que este muestra el ultimo indice donde se encuentre la palabra, en caso de que se repita la palabra o letra.
let res7 = cadena7.lastIndexOf('prueba');
document.write(res0_7 + '<br>'); // muestra 10 porque es la primera vez que aparece
document.write(res7 + '<br><br>'); // muestra 17 porque es la ultima vez que aparace 


let cadena8 = '234';
// .padStart nos permite especificar cuanto queremos que mida la cadena (primer valor) y con que cadena va a rellenar el espacio que falta al incio.
let res8 = cadena8.padStart(10, '1');
document.write(res8 + '<br><br>'); // si queremos una cadena de 10 '234' ya ocupan 3 lugares por ende quedan 7 lugares, esos 7 lugares los vas rellenar con '1' al inicio de la cadna, hasta llegar a '234' (que serian los lugares 8, 9, y 10).


let cadena9 = '123';
// .padEnd hace lo mismo que padStart solo que coloca el string de relleno al final.
let res9 = cadena9.padEnd(10, '4');
document.write(res9 + '<br><br>');


let cadena10 = 'cadena ';
//  .repeat nospermite repetirla cadena la cantidad de veces que deseemos.
let res10 = cadena10.repeat(3);
document.write(res10 + '<br><br>');


let cadena11 = 'cadena de pueba';
// .split permite separar la cadena cada vez que encuentre la palabra, letra o caracter especificado, convirtiendo las palabras separadas en indices.
let res11 = cadena11.split(' '); // separa la cadena por espacios, cada vez que encuentre un espacio lo que esta antes de este se va a volver un indice.
document.write(res11[0] + '<br>');
document.write(res11[1] + '<br>');
document.write(res11[2] + '<br>');
document.write(res11 + '<br><br>'); // la cadena se separa por comas porque es un array.


let cadena12 = 'ABCDEFG';
// .substring nos permite recortar la cadena indicando desde que indice arranca y en cual termina, el valor donde termina siempre se le tiene que restar 1, ej: si coloco substring(0,6), 6 en realidad va a ser 5 porque 6-1=5.
let res12 = cadena12.substring(2, 7);
document.write(res12 + '<br><br>');


let cadena13 = 'ABCDEFGHIJK';
// .toLowerCase convierte todas la letras del string a miniscula
let res13 = cadena13.toLowerCase();
document.write(res13 + '<br><br>');


let cadena14 = 'abcdefghijk';
// .toUpperCase convierte todas la letras del string a mayuscula
let res14 = cadena14.toUpperCase();
document.write(res14 + '<br><br>');


let cadena15 = ['hola', ' juana'];
// .toString convierte algo a string (cadena).
let res15 = cadena15.toString();
document.write(res15[0] + '<br>'); // deberia mostrar 'hola', pero ya no lo hace porque ahora es un string.
document.write(res15[1] + '<br>'); // deberia mostrar 'juana', pero ya no lo hace porque ahora es un string.
document.write(res15 + '<br><br>');


let cadena16 = '      cadena       ';
console.log(cadena16);
// .trim elimina los espacios en blanco de mas.
let res16 = cadena16.trim();
console.log(res16);
console.log('------------------------------');


let cadena17 = 'cadena     ';
console.log(cadena17);
// .trimEnd elimina los espacios del final
let res17 = cadena17.trimEnd();
console.log(res17);
console.log('------------------------------');


let cadena18 = '      cadena';
console.log(cadena18);
// .trimStart elimina los espacios del principio
let res18 = cadena18.trimStart();
console.log(res18);

let cadena19 = 'Hola soy samuel, tengo 18';
// .length nos dice el tamaño de la cadena, (tambien funciona en arrays).
let res19 = cadena19.length;
document.write(res19);