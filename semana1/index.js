// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function obtenFecha(dia,mes,año){
    const fechaactual= new Date;
    const añoactual = fechaactual.getFullYear();
    const mesesactual = fechaactual.getMonth();
    const diasactual = fechaactual.getDate();
    const Año=añoactual-año;
    const meses = (mesesactual-mes);
    const dias = (diasactual-dia);

    
    return Año;
    return dias;
    return meses;
}

async function main() {
    const dia = Number(await ask("Ingresa tu dia de nacimiento: "));
    const mes = Number(await ask("Ingresa tu mes de nacimiento: "));
    const año = Number(await ask("Ingresa tu año de nacimiento: "));
    const Año= obtenFecha(dia,mes,año);
    const dias= obtenFecha(dia,mes,año);
    const meses = obtenFecha(dia,mes,año);

   

    console.log("Años cumplidos: ",Año)
    console.log("Dias cumplidos: ",dias*364);
    console.log("Meses cumplidos ",meses*12)
}

main();