
/*
    ===== Código de TypeScript =====
    Destructuración de argumentos
*/

export interface Producto {
    desc: string;
    precio:number;
}


const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 50
}
const tableta: Producto = {
    desc: 'Nokia A1',
    precio: 50
}


export function calculaIVA( productos:Producto[] ):[number, number] {
    let total = 0;

    productos.forEach( ( {precio} )=>{
        total += precio;
    })

    return [total, total * 0.19];
}


const articulos = [ telefono, tableta];

const [total, iva] = calculaIVA( articulos );

// solo para pruebas
// console.log('Total :',total);
// console.log('IVA :',iva);