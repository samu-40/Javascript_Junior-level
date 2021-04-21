// 1. Crear mini sistema que nos permita registrar al los alumnos que estan presentes (P) y asusentes (A).
// 2. Pasados los 30 dias mostrar las situacion final de todos los alumnos (nro total de presentes y ausentes).
// 3. Se puede tener un maximo de 10% de ausencias por semestre, si se tiene mas aclarar que esta reprobado.

let cant_alum = prompt('¿Cuantos alumnos son?');
let alum_total = [];

for (i = 0; i < cant_alum; i++) {
    alum_total[i] = [prompt('Nombre del alumno ' + (i + 1)), 0 /*presentes*/ , 0 /*ausentes*/ ];
}

const tomarAsistencia = (nombre, pos /*posicion*/ ) => {
    let presencia = prompt(`${nombre} ¿Ausentente(a) o Presente(p)?`);
    if (presencia == 'p' || presencia == 'P') {
        alum_total[pos][1]++;
    } else if (presencia == 'a' || presencia == 'A') {
        alum_total[pos][2]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alum in alum_total) {
        tomarAsistencia(alum_total[alum][0], alum);
    }
}

for (alum in alum_total) {
    let res = `${alum_total[alum][0]}:<br>
    ________Asistencias: ${alum_total[alum][1]} <br>
    ________Inasistencias: ${alum_total[alum][2]} `;
    if (alum_total[alum][2] > 18) {
        res += '<b style="color:red">Reprobado por inasistencias</b> <br><br>';
    } else {
        res += '<br><br>';
    }
    document.write(res);
}