
/*
    ===== Código de TypeScript =====
    Clases en Typescript
*/

class PersonaNormal {
    // nombre: string;
    // direccion: string;
    constructor( public nombre:string, public direccion: string ){}
}


class Heroe extends PersonaNormal{
    // otra forma de crear constructor utilizado modificadores de acceso
    constructor(
        // son argumentos obligatorios pero podemos colocarlos opcionales con ?
        public alterEgo: string,
        public edad :number,
        public nombreReal:string // opcional
        ){
        super(nombreReal,'new york' ); // llamaos el constructor
    }
}

// interface Personaje {

//     alterEgo: string;
//     edad: number;
//     nombreReal: number;
// }
const ironman = new Heroe('Ironman',33,'Tony Star');

console.log(ironman);

/**
 *  Las interfaces no existen en js a diferencia de las clases 
 *  Pero las interfaces son como clases tontas
 *  en las clases podemos utilizar funciones
 */

     // utilizacion de propiedades tradicionalmente
    //  alterEgo: string;
    //  edad: number;
    //  nombreReal: number;

    //  imprimirNombre(){
    //      return this.alterEgo + ' ' + this.nombreReal;
    //  }

    // constructor 
    // constructor( alterEgo: string ) {
    //     this.alterEgo = alterEgo;
    // }