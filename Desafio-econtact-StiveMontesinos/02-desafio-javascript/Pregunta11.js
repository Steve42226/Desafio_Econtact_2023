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

const valor=sumatoria([5,1,45,100,1]);
console.log(valor);