
/*
    ===== Código de TypeScript =====
*/

let nombre: string = 'Peter';
let hp: number | string = 33; // acepta concatenar tipado
let estaVivo :  boolean = true;

hp = 'FULL';

console.log(nombre+' tiene '+hp+' de hp, y esta vivo = '+estaVivo);


/**
 * typescript evita que se adsigen otros tipos que no estan declarados
 */