
/*
    ===== Código de TypeScript =====
*/

// Arreglos
let habilidades:string[]  = ['Bash','Counter','Healing'];
habilidades.push('otro');

// Objetos

// definimos interfaces

interface Personaje {
    nombre:string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string
}

const personaje:Personaje ={
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );


/**
 * un arreglo no es mas que una colección de elementos 
 * evitar utilizar any en el tipado de datos
 * para inicializar objetos generalmente utilizaremos const
 */