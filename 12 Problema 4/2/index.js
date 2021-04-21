let trabajo = '240min de trabajo';
let estudio = '100min de estudio';
let tp = '100min de tp';
let descanso = '10min de descanso';
let housework = '30min de housework';

for (let i = 1; i < 13; i++) {
    if (i == 1) {
        console.groupCollapsed('Semana 1');
    }
    console.groupCollapsed('Dia ' + i);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(housework);
    console.groupEnd();
    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed('Semana 2');
    }
}

console.groupEnd();
console.groupEnd();