// El primer blucle que vamos a ver es el While
// El bucle While lo que hace es preguntar si la condicion es verdadera una y otra vez, es decir, que mientras la condicion sea verdadera siempre se va a preguntar si la condicion es verdadera, hasta que la condicion sea falsa.
// Esta es la sintaxis:

//  while (condicion){
//      acciones...
//  }

// Ej:

let num = 0;

while (num < 6) {
    num++; //Colocamos esto para que el blucle no se nos ejecute infinitas veces.
    document.write(`${num} `);
}