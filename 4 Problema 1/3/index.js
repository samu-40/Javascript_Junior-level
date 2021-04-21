// 1. Crea calculadora que nos simplifique el trabajo.

const suma = (num1, num2) => parseInt(num1) + parseInt(num2);
const resta = (num1, num2) => parseInt(num1) - parseInt(num2);
const multi = (num1, num2) => parseInt(num1) * parseInt(num2);
const divi = (num1, num2) => parseInt(num1) / parseInt(num2);

alert('¿Que operacion deseas realizar?');
let opcion = prompt('1. Suma ' + '2. Resta ' + '3. Division ' + '4.Multiplicacion');

if (opcion == 1) {
    let num1 = prompt('Numero 1:');
    let num2 = prompt('Numero 2:');
    document.write(suma(num1, num2));
} else if (opcion == 2) {
    let num1 = prompt('Numero 1:');
    let num2 = prompt('Numero 2:');
    document.write(resta(num1, num2));
} else if (opcion == 3) {
    let num1 = prompt('Numero 1:');
    let num2 = prompt('Numero 2:');
    document.write(divi(num1, num2));
} else if (opcion == 4) {
    let num1 = prompt('Numero 1:');
    let num2 = prompt('Numero 2:');
    document.write(multi(num1, num2));
} else {
    document.write('No se encuentra la operacion');
}