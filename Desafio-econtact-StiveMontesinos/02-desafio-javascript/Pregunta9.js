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
    
     const valor=cargarArreglo(1);
     console.log(valor);