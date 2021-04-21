// Los metodos de atributos de elementos nos permiten declarar, modificar, obtener o eliminar atributos de los elementos HTML.

let rangoEdad = document.querySelector('.edad');
// .setAttribute() permite cambiar o crear atributos. El primer parametro es el atributo a crear o modificar y el segundo es el valor de dicho atributo.
rangoEdad.setAttribute('type', 'number'); // aqui cambiamos el valor del atributo type.

let rangoEdad2 = document.querySelector('.edad2');
rangoEdad2.setAttribute('type', 'color'); // aqui cree un atributo y le di un valor.

// .getAttribute() permite obtener el valor del atributo especificado.
let value = document.querySelector('.edad').getAttribute('type');
document.write(value);

// .removeAttribute() permite eliminar el atributo especificado.
let remove = document.querySelector('.edad').removeAttribute('type');