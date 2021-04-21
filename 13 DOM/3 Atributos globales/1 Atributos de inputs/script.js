// Ahora vamos a poder acceder a los atributos de un elemento sin necesidad de usar los metodos de atributos.

// .className muestra el valor del atributo class.
let titulo = document.querySelector('.input-normal');
document.write(titulo.className + '<br>');

// .value muestra el valor del atributo value.
let titulo2 = document.querySelector('.input-normal2');
document.write(titulo2.value + '<br>');

// .type permite modificar el valor del atributo type.
let titulo3 = document.querySelector('.input-normal3');
titulo3.type = "range";

// .accept permite especificar el tipo de archivo que va a aceptar el input.
let titulo4 = document.querySelector('.input-normal4');
titulo4.accept = 'image/png';

// .minLength permite especificar la cantidad minima de caracteres que puede tener un input.
let titulo5 = document.querySelector('.input-normal5');
titulo5.minLength = '8';

// .placeholder modifica el placeholder.
let titulo6 = document.querySelector('.input-normal6');
titulo6.placeholder = 'Hola que tal?';

// .required es para espesificar si se necesita rellenar ese campo o no.
let titulo7 = document.querySelector('.input-normal7');
titulo7.required = 'true';