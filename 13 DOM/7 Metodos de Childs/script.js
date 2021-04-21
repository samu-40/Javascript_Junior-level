const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('p').innerHTML = 'parrafo';
const h2_nuevo = document.createElement('h2');
h2_nuevo.innerHTML = 'Titulo';

const h2_antiguo = document.querySelector('.h2');

// .replaceChild() sirve para reemplazar un elemento hijo por otro, el primer parametro es el nuevo hijo y el segundo el hijo anterior.
contenedor.replaceChild(h2_nuevo, h2_antiguo);

const h4 = document.querySelector('.h4');
// .removeChild sirve para remover un hijo de un contenedor.
contenedor.removeChild(h4);

// .hasChildNodes() nos permite preguntar si un elemento tiene hijos o no, devuelve true o false
let resultado = contenedor.hasChildNodes();
if (resultado) {
    document.write('El elemento si tiene hijos');
} else {
    document.write('El lemento no tiene hijos');
}