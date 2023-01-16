
/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

 function verificarSector(econtact = {}, sector) {}
const objetoFijo = {
    empresa: "E-Contact",
    datos: {
      empleados: 100,
      direccion: {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };
  
function verificarSector(econtact = {}, sector) {
    let estado=0;
    const sectores = Object(objetoFijo.datos.sectores);
    for (const value of sectores) 
    {
        if(value === sector)
        {
            estado+=1;
        }
    

    }
    if (estado>0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

const valor=verificarSector(objetoFijo,"fdf");
console.log(valor);

