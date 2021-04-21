/* 1. Crear una funcion para preguntarle a un alumno en que materia se quiere inscribir:
    - Si ya hay 20 alumnos anotados en la materia negarle la inscripcion.
    - Si hay menos de 20 anortar al alumno y agregarlo a la lista.
*/

let materias = {
    fisica: ['Jose', 'Samuel', 'Juan', 'Maria', 'Ana', 'Andres'],
    quimica: ['Alejandra', 'Juan', 'Maria', 'Ana', 'Andres'],
    matematica: ['Carlos', 'Samuel', 'Juan', 'Andres'],
    ingles: ['Jimena', 'Samuel', 'Maria', 'Ana', 'Andres']
};

const inscribir = (alumno, materia) => {
    let alumnos = materias[materia];
    alumnos.shift();
    if (alumnos.length >= 20) {
        document.write(`Lo siento ${alumno} ya noy vacantes disponibles para <b>${materia}</b>.`);
    } else {
        materias[materia].push(alumno);
        document.write(
            `Muy bien ${alumno}, ya has sido inscrito en <b>${materia}</b>:<br>
            ${materias[materia]}`
        );
    }
}

inscribir('Jesus', 'matematica');