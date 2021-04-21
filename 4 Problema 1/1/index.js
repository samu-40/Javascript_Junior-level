// 1.Dejar pasar a los mayores de edad
// 2. La primera persona despues de las 2am entra gratis.

let free = false;

const validarCliente = (time) => {
    let edad = prompt('¿Cuantos años tienes?');
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert('Puedes pasar gratis porque eres la primer persona despues de las 2am');
            free = true;
        } else {
            alert(`Puedes pasar, pero son las ${time}:00hs por ende tienes que pagar la entrada.`)
        }
    } else {
        alert('Eres menor de edad, no puedes pasar.');
    }
}

validarCliente(23);
validarCliente(1);
validarCliente(2);
validarCliente(2);
validarCliente(3);