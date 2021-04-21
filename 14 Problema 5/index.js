// 1. Crear un programa que ayude a una persona a escoger una llave.
// 2. Una vez seleccionada enviarla al servidor para que otro programador se encargue.
const contenedor = document.querySelector('.flex-container');

function crearLlave(nombre, modelo, precio) {
    img = '<img class= "llave-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Llave_bronce.jpg/220px-Llave_bronce.jpg">';
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`Llave ${i}`, `Modelo: ${modeloRandom}`, `${precioRandom}$`);
    let div = document.createElement('div');

    div.addEventListener('click', () => document.querySelector('.key-data').value = modeloRandom); // esto no lo deberiamos ver en este nivel pero es necesario para que podamos resolver este problema, veamoslo como una breve introduccion al siguente nivel. 
    // Cuando hagamos click sobre el elemento, el value del <input type='hidden' class='key-data'> va a ser igual al modelo de la llave, esto permite enviar el modelo de llave al servidor para comprarla.

    div.tabIndex = i; // esto permite navegar con el tabulador, cuando le decimos: = i, estamos diciendo que el div 1 va a tener un tabIndex = 1, luego el div 2 va a tener un tabIndex = 2, y asi sucesivamente hasta el 20, de esta manera cuando presionemos tabulador vamos a estar sobre el div 1, si presionamos de nuevo vamos a estar sobre el div 2 y asi hasta el 20.

    div.classList.add(`item${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragment.appendChild(div);
}

contenedor.appendChild(fragment);