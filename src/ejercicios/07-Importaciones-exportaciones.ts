import { Producto, calculaIVA } from './06-destructuracion-argumentos';

/*
    ===== Código de TypeScript =====
    Importaciones y Exportaciones
*/



const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, iva] = calculaIVA(carritoCompras);

console.log('Total', total);
console.log('Iva', iva);