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

 const valor= contarTipoNumber(["ddd",23,23,3,4,5,true,false,44,56]);
 console.log("El Arreglo contiene: "+valor+" valores de tipo number");