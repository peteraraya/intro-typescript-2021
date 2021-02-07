
/*
    ===== Código de TypeScript =====
    
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

// creamos dos pasajeros
const pasajero1: Pasajero = {
  nombre: 'Alfredo'
}

const pasajero2: Pasajero = {
  nombre: 'Pedro',
  hijos: ['Agustina', 'Danae']
}


function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0; // añadimos ? para que sea opcional en caso que no tenga hijos y || 0

  console.log(cuantosHijos);
}


imprimeHijos(pasajero1);