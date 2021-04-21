// 1. Usar la calculadora que se creo en el ultimo problema
// 2. Agregarle nuevas funciones como calcular potencias, raizes cuadradas y cubicas.
class Calculadora {
    suma = (num1, num2) => (num1) + (num2);
    resta = (num1, num2) => (num1) - (num2);
    multi = (num1, num2) => (num1) * (num2);
    divi = (num1, num2) => Math.round(num1) / (num2);
    poten = (num1, num2) => (num1) ** (num2);
    raiz_cua = num => Math.round(Math.sqrt(num));
    raiz_cub = num => Math.round(Math.cbrt(num));
}
let calculadora = new Calculadora();



alert('¿Que operacion deseas realizar?');
let opcion = prompt(`1. Suma 2. Resta 3. Division 4.Multiplicacion 5.Potenciacion 6.Raiz Cuadrada 7.Raiz Cubica`);

if (opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4) {
    let num1 = parseInt(prompt('Numero 1:'));
    let num2 = parseInt(prompt('Numero 2:'));
    if (opcion == 1) {
        document.write(calculadora.suma(num1, num2));
    } else if (opcion == 2) {
        document.write(calculadora.resta(num1, num2));
    } else if (opcion == 3) {
        document.write(calculadora.divi(num1, num2));
    } else if (opcion == 4) {
        document.write(calculadora.multi(num1, num2));
    }
} else if (opcion == 5) {
    let numb = parseInt(prompt('Numero base: '));
    let numexp = parseInt(prompt('Numero exponente: '));
    document.write(calculadora.poten(numb, numexp));
} else if (opcion == 6) {
    let num = parseInt(prompt('Numero a encontar raiz cuadrada:'));
    document.write(calculadora.raiz_cua(num));
} else if (opcion == 7) {
    let num = parseInt(prompt('Numero a encontra raiz cubica:'));
    document.write(calculadora.raiz_cub(num));
} else {
    alert('No se encuentra la calculadora');
}