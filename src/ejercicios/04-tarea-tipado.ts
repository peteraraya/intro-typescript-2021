
/*
    ===== Código de TypeScript =====

*/

interface SuperHeroe {
    nombre:string;
    edad:number;
    direccion: Direccion;
    mostrarDireccion: () => void;
}

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

const superheroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion:{
        calle:'Main St',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', '+this.direccion.ciudad + ', '+this.direccion.pais;
    }
}

const direccion = superheroe.mostrarDireccion();


console.log( direccion );
