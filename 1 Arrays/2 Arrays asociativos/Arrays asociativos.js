// Un array asiciativo es un array donde sus elementos pasan a ser una etiqueta y tienen asociado un valor, es decir, cada elemento es ahora una etiqueta con un valor. Ej:
let auto = {
    marca: 'Ford',
    modelo: 'Ranger',
    color: 'Blanco',
    año: '2017'
};

// Para mostrar los valores de este array debemos hacer lo mismo que con los arrays normales pero en vez de poner la posicion, ponemos la etiqueta, entre comillas simples o dobles, del valor que queremos mostrar.
document.write(auto['modelo']);

// Gracias a esto podmos hacer cosas como estas:
let marca = auto['marca'];
let modelo = auto['modelo']
let color = auto['color'];
document.write(`<br>Tengo una ${marca} ${modelo} de color ${color}`);

// O podemos hacer asi:
document.write(`<br>Tengo una ${auto['marca']} ${auto['modelo']} de color ${auto['color']}`)