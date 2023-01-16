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

const valor=validarNombre(["stive","yuriko","carlos"],"stive");
console.log(valor);