// los childs son los elementos hijos de otros elementos

// .firstElementChild permite ver cual es el primer elemento hijo del padre
let firstChild = document.querySelector('.contenedor').firstElementChild;
console.log(firstChild);

// .lastElementChild permite ver cual es el ultimo elemento hijo del padre
let lastChild = document.querySelector('.contenedor').lastElementChild;
console.log(lastChild);

// .children permite ver una coleccion HTML (no array) de todos los elementos hijos del padre
let children = document.querySelector('.contenedor').children;
console.log(children);
for (child of children) { // la manera de recorrer esta coleccion es con for of o con un for normal, no se puede recorrer con un forEch ni con un filter
    console.log(child);
}