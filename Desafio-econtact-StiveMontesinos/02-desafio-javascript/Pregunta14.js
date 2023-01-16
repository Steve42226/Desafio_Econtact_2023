
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

    const valor=validarArreglo([5,1,1,5]);
    console.log(valor);
    