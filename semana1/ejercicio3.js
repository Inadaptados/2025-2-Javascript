// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number (await ask("Introduce un numero "));

  const multiplo3 = number % 3 === 0;
  const multiplo5 = number % 5 === 0;
  const multiploAmbos = multiplo3 && multiplo5;

  switch (true) {
    case multiploAmbos:
      console.log ("Multiplo de 3 y 5")
      break;
      case multiplo3:
        console.log("Mulitplo de 3");
        break;
        case  multiplo5:
          console.log("multiplo de 5");
          break;
          default:
            console.log("No es multiplo de 3 ni de 5")
            break;
  }


}

main();
