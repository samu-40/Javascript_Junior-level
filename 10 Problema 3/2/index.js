/* 1. crear una funcion que al pasarle una materia como parametro devuelva:
        -Profesor asignado
        -El nombre de todos los alumnos*/
// 2. Crear funcion que nos diga en cuantas clases esta un alumno, cualesson esas clases y el profesor de dicha materia.

const solicitarInfo = materia => {
    let materias = {
        fisica: ['Jose', 'Samuel', 'Juan', 'Maria', 'Ana', 'Andres'],
        quimica: ['Alejandra', 'Juan', 'Maria', 'Ana', 'Andres'],
        matematica: ['Carlos', 'Samuel', 'Juan', 'Andres'],
        ingles: ['Jimena', 'Samuel', 'Maria', 'Ana', 'Andres']
    };
    if (materia !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    };
};

const obtenerInfo = materia => {
    let informacion = solicitarInfo(materia);

    if (informacion !== false) {
        let profesor = solicitarInfo(materia)[0][0];
        let alumnos = solicitarInfo(materia)[0];
        alumnos.shift();
        document.write(
            `<u>${informacion[1]}:</u><br>
        Profesor: <b>${profesor}</b><br>
        Alumnos: <b>${alumnos}</b><br><br>`
        );
    };
};

const infoAlumno = alumno => {
    let informacion = solicitarInfo();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(' ' + info);
        }
    }
    document.write(
        `<b style = 'color:blue'>${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>
        Las cuales son: <b>${clasesPresentes}</b><br><br>`
    );
};

obtenerInfo('fisica');
obtenerInfo('quimica');
obtenerInfo('matematica');
obtenerInfo('ingles');

infoAlumno('Samuel');
infoAlumno('Juan');
infoAlumno('Maria');
infoAlumno('Ana');
infoAlumno('Andres');