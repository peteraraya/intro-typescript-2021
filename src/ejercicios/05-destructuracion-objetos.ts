
/*
    ===== Código de TypeScript =====
    Destructuración de objetos
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
};
// destructuracion de objetos el orden de los elementos no importa
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;


console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('El canción actual es de: ', cancion);
console.log('El autor es : ', autor);

// Destructuración de arreglo la posición es importante
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// se recomienda indicar con un numero la posición del elemento
const [, , p3] = dbz;


// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);

