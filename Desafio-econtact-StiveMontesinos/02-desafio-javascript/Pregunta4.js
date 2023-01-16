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

 const valor=obtenerCantidadDePares(3,5);
 console.log(valor);