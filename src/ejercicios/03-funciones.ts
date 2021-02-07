
/*
    ===== Código de TypeScript =====
    Funciones básicas
*/

function sumar(a:number, b:number): number {
    return ( a + b );
}

const sumarFecha = (a:number,b:number):number =>{
    return a + b ;
}

// Argumentos opcionales deben ir al final
function multiplicar(numero: number, base: number = 2, otroNumero?: number ):number{
    return numero * base;
}

const resultado = multiplicar(5, 10 ,0);
console.log(resultado);


/**
 * Funciones con argumentos
 *  una interfaz es una clase tonta ya que no sabe lo que pasa en la función, metodos etc
 *   se asegurar de definir los argumentos
 *  son objetos ligeros y permiten restringir que tipo de argumentos voy a utilizar
 */


 // Definimos una interfaz
 interface PersonajeLOR{
    nombre:string;
    pv: number;
    mostrarHp: () => void;
 }

 function curar( personaje:PersonajeLOR , curarX:number):void {
     personaje.pv += curarX;
     console.log(personaje);
 }

 const nuevoPersonaje:PersonajeLOR = {
        nombre:'Strider',
        pv: 50,
        mostrarHp(){
            console.log('Puntos de vida : ', this.pv);
        }
 }

 curar( nuevoPersonaje, 20);

 nuevoPersonaje.mostrarHp();


