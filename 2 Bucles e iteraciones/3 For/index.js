// For es otro bucle, la diferencia con while y do while es que a for si le podemos decir cuantas veces va preguntar la condicion, es decir, cuantas veces se va a ejecutar.

// La sintaxis es:

//  for (variable; condicion; aumento o decremento) {
//      Acciones...    
//  }

// Ej:

for (let i = 0; i <= 6; i++) {
    document.write(i + '<br>');
}

// break tambien se puede usar aca:
document.write('<br>');

for (let i = 0; i <= 20; i++) {
    document.write(i + '<br>');
    if (i == 10) {
        break;
    }
}

// Hay otra sentenncia llamada continue, sirve para saltarse un numero (en este caso, pero se puede utilizar para muchas mas cosas):
document.write('<br>');

for (let i = 0; i <= 6; i++) {
    if (i == 3) {
        continue;
    }
    document.write(i + '<br>');
}