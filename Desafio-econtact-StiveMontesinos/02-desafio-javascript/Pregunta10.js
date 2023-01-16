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
 const valor=divisiblesPorCinco([5,1,45,100,1]);
 console.log(valor);

