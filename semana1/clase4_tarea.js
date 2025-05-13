// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function obtenFecha(year){

    const fechaactual= new Date;
    const añoactual = fechaactual.getFullYear();
    const años = year.getFullYear();
    const Año=añoactual-años;
    const dias = (añoactual-años);
    const meses = (añoactual-años);



    
    return Año,dias,meses;
    

   
}

async function main() {

    const year = new Date (await ask("Ingresa tu fecha"));
    const Año= obtenFecha(year);
    const dias= obtenFecha(year);
    const meses = obtenFecha(year);

   

    console.log("Años cumplidos: ",Año)
    console.log("Dias cumplidos: ",dias*364);
    console.log("Meses cumplidos ",meses*12)

 
}

main();