// 1. Solicitarle los datos aun alumno y decirle si apruba o no. Los requisitos son:
//  - Contar al menos el 90% de la asistencia.
//  - El promedio por materia debe ser por lo menos 7 / 10.
//  - Debe tener por lo menos el 75% de los trabajos practicos entregados.
// Como mostrar la informacion:
//  - Mostrar esto en la consola con colores representativos.
//  - Todo esto estructurado como tabla.


let materias = {
    Matematica: [90, 7, 75, 'Matematica'],
    Fisica: [10, 3, 10, 'Fisica'],
    Quimica: [100, 10, 100, 'Quimica']
};

const validarMateria = () => {
    for (let materia in materias) {
        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let tps = materias[materia][2];
        console.log(materias[materia][3]);
        if (asistencia >= 90 && promedio >= 7 && tps >= 75) {
            console.log('%c   Aprobado', 'color:lightgreen');
        } else {
            console.log('%c   Desaprobado', 'color:tomato');
        }
    }
}

validarMateria();