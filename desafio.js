/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

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

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

 function largoDelNombre(nombre = "") {

  let TipoDato = typeof nombre;
  if(typeof nombre ==="string"){

      //do
      //{
         // console.log("***********************************************************************************");
         // let nombre=prompt("INGRESE EL NOMBRE");

          const TamañoNombre = nombre.length;
          if(TamañoNombre>=0 && TamañoNombre<=5)
          {
              console.log("Es un nombre corto. Su largo es de:"+TamañoNombre);
          }
          else{
              if(TamañoNombre>5 && TamañoNombre<=10)
              {
                  console.log("Es un nombre normal. Su largo es de:"+TamañoNombre);
              }
              else{
                  if(TamañoNombre>=11)
                  {
                      console.log("Es un nombre largo. Su largo es de:"+TamañoNombre);
                  }
              }
          }
     // }while(nombre!=="return") 


  }
  else{
      console.log("El parámetro recibido es invalido: Tipo de Dato: "+TipoDato);    
  }
  
}


largoDelNombre("vdsgdsgsdgsgsgsgsg")
//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

 function contarTipoNumber(arreglo = []) {
  let contador=0
  for (const value of arreglo) {
      if(typeof value==="number") 
      {contador +=1;}
  }
  return contador
}

const valor1= contarTipoNumber(["ddd",23,23,3,4,5,true,false,44,56]);
console.log("El Arreglo contiene: "+valor1+" valores de tipo number");
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */


 function datosPersona(persona = {}) {

  const {nombre: nomb, edad, altura} =persona;
  return `Esta persona se llama ${nomb}, tiene ${edad} años y su altura es de ${altura}`;

}

const valor2 = datosPersona({nombre:"stive",edad:32,altura:1.75});
console.log(valor2);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

 function obtenerCantidadDePares(numero1, numero2) {
  const resultado="";

  if(typeof numero1==="number" && typeof numero2==="number")
  {
      let contador=0
      for (let i = numero1; i <= numero2; i++) {
          
          if((i%2)==0)
          {
              contador+=1;

          }
          
      }
      const resultado= console.log(`La cantidad de números pares obtenido fue de: ${contador}`);
  }
  else{

      const resultado= console.log("Los datos ingreados deben de ser numeros");
  }
  return resultado;
}

const valor3=obtenerCantidadDePares(3,5);
console.log(valor3);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

 

function obtenerCantidadDeSedes(econtact = {}) {

  const objetoFijoS = Object.keys(objetoFijo.datos.sedes);
  return objetoFijoS.length;
  
}

const valor4=obtenerCantidadDeSedes(objetoFijo)
console.log(valor4);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

 

function obtenerTelefonoPeru(econtact = {}) {
  let resultado="";
  const peru = Object(objetoFijo.datos.sedes.Peru);
  const {telefono,empleados}=peru;
  if(peru.telefono!==null)
  {
      resultado = peru.telefono;
  }
  else
  {
      resultado = connsole.log("Perú no tiene asignado un teléfono");
  }
  
  return resultado;
  
}

const valor5=obtenerTelefonoPeru(objetoFijo);
console.log(valor5);

//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

 
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
const valor7=obtenerPaisesConTelefono(objetoFijo);
console.log(valor7);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

 function calculoMatematico(operacion, numero1, numero2) {
  let resultado="";
  
  if(typeof numero1 =="number" && typeof numero2 =="number")
  {
      switch (operacion) {
          case "+":
              resultado = numero1 + numero2;
            break;
          case "-":
              resultado = numero1 - numero2;
            break;
          case "*":
              resultado = numero1 * numero2;
            break;
          case "/":
              resultado = numero1 / numero2;
            break;
          default:
              resultado = console.log("La operación matemática que intenta realizar es inexistente");
            break;
        }

  }
  else{

      resultado =  console.log("Los datos ingresados deben ser numeros");
  }


  return resultado;
}

const valor8=calculoMatematico("ddd",1,2);
console.log(valor8);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

 function cargarArreglo(numero) {

  if (numero > 0)
  {
      arreglo = [1,2,3,4];
      do {
          result = arreglo.push(numero);

      } while ( arreglo.length < 2 * numero);

      return arreglo;
  }
  else
  {
      return 'El numero ingresado debe ser mayor a 0'
  }

}

const valor9=cargarArreglo(1);
console.log(valor9);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

 function divisiblesPorCinco(numeros = []) {

  let contador=0;
  for (let value of numeros) {
  
      if (value %5 ==0) {
  
          contador +=1;
      } 
  
  }
  return `Numeros divisbles por 5 es: ${contador}`;

}
const valor10=divisiblesPorCinco([5,1,45,100,1]);
console.log(valor10);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

 function sumatoria(numeros = []) {
  let sumatoria=0
  for(let value of numeros) 
  {
      sumatoria+=value;
  } 
  return `La suma de los numeros es: ${sumatoria}`;

}

const valor11=sumatoria([5,1,45,100,1]);
console.log(valor11);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantidadEmpleados(econtact = {}) {

  const pais = Object(objetoFijo.datos.sedes);
  const {Chile, Peru, EEUU, Ecuador, Colombia} = pais;

  SumaEmpleados = objetoFijo.datos.empleados;
  SumaEmpleadosSedes = Chile.empleados + Peru.empleados + EEUU.empleados + Ecuador.empleados + Colombia.empleados;

  if (SumaEmpleados === SumaEmpleadosSedes) {
      return true;
  }
  else
  {
      return false;
  }

}

const valor12=verificarCantidadEmpleados(objetoFijo);
console.log(valor12);

//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */



 function calcularCuadrados(arreglo = []) {
    const numeros = Object.values(arreglo);
    let arreglo2 =[];
    for(let i of numeros) 
    {
         i=Math.pow(i,2);
         arreglo2.push(i);
    } 
 
    return arreglo2;
 }
 const valor13=calcularCuadrados(arregloFijo);
 console.log(valor13);
 
 
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

 function validarArreglo(numeros = []) {        

  if (numeros.length < 6)
  {
      return false;
  }
  else
      
  {
      let sumatoria=0;
      
      for(let i of numeros) 
      {
          sumatoria+=i;
      }
      if (sumatoria > 100)
      {
          return true;
      }
      else
      {
           return false;
      }
      
  }

}

const valor14=validarArreglo([5,1,1,5]);
console.log(valor14);

//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */


 function validarNombre(nombres = [], nombre) {
  if (typeof nombre ==="string")
  {
      for (const value of nombres) {
          if (value === nombre)
          {
              return true;
          }
          else
          {
              return false;
          }
      }
  }else
  {
      return `Los valores tienen que ser cadenas`;
  }


}

const valor15=validarNombre(["stive","yuriko","carlos"],"stive");
console.log(valor15);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

 function devolverPosicion(numeros = [], numero) 
 {  

 let i = numeros.indexOf(numero);
 return `Numero se encuentra en la posicion ${i+1}`;
 }

 const valor16=devolverPosicion([3,34,4,14],4);
 console.log(valor16);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

  
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

const valor17=verificarSector(objetoFijo,"fdf");
console.log(valor17);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */




function verificarCantidadEmpleados(econtact = {}, cantidad) {

  let resultado="";
  let contador=0;
  const pais = Object(objetoFijo.datos.sedes)

  for (let i = 0; i < Object.keys(pais).length; i++)
   {
        const paisEmpleados =pais[Object.keys(pais)[i]].empleados;
        if ( paisEmpleados  < cantidad)
        {
            contador +=1;
        }
   }

    resultado= `Sedes con menos de ${cantidad} empleados: ${contador}`;

return resultado;

}
const valor18=verificarCantidadEmpleados(objetoFijo,20);
console.log(valor18);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

 function verificarClave(objeto = {},clave) {

  let result = Object.prototype.hasOwnProperty.call(objeto,clave)
  return result;

}

const valor19=verificarClave({nombre: 'Stive', edad: 32, profesion: 'Ingeniero sistemas'},'altura');
console.log(valor19);

//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */


 function quitarParteDecimal(arregloNumerosReales = []) {
 
         const numeros = Object.values(arregloNumerosReales);
         let arreglo2 =[];
         for(let i of numeros) 
         {
              arreglo2.push(parseInt(i));
         } 
      
         return arreglo2;
     
 }
 const valor20=quitarParteDecimal(numerosReales);
 console.log(valor20);
 
