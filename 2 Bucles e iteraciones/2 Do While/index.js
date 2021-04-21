// Do While hace lo mismo que el While pero con la diferencia de que primero ejecuta el codigo y luego verifica la condicion
// La sintaxis es:

//  do {
//      Acciones...
//  }
//  while (condicion)

// Ej:

let num = 1;

do {
    document.write(`${num} `);
    num++; //Para que el bucle no se repita infinitas veces.
}
while (num < 6);

// Hay una sentencia llamada break que se utiliza tanto en While como en Do While, permite indicarle al blucle cuando debe parar. Ej:
document.write('<br>');

let num2 = 0;

while (num2 <= 100) {
    num2++;
    document.write(num2 + ' ');
    if (num2 == 10) {
        break;
    };
}

// Cuando num2 sea igual a 10 el while dejara de ejecutarse por mas de que la condicion diga que tiene que llegar a 100.