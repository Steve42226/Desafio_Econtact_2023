/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */
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

function obtenerPaisesConTelefono(econtact = {}) {
      let resultado="";
      let contador=0;
      const pais = Object(objetoFijo.datos.sedes)
      for (let i = 0; i < Object.keys(pais).length; i++)
       {
            const paisTelefono =pais[Object.keys(pais)[i]].telefono;
            if ( paisTelefono != null)
            {
                contador +=1;
            }
       }

        resultado= `La cantidad de Paises con telefono asignado: ${contador}`;

    return resultado;
}
const valor=obtenerPaisesConTelefono(objetoFijo);
console.log(valor);


