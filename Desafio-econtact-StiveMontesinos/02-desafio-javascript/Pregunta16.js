
/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

    function devolverPosicion(numeros = [], numero) 
    {  

    let i = numeros.indexOf(numero);
    return `Numero se encuentra en la posicion ${i+1}`;
    }

    const valor=devolverPosicion([3,34,4,14],4);
    console.log(valor);