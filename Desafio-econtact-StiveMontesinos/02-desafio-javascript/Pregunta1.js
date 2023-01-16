

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
