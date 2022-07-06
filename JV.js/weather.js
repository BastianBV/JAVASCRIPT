let weather = prompt(`Como es el clima en tu cidudad?, seleccione una opcion /n a) soleado /n b) nublado /n c) lluvioso `);
let celsius = parseInt(prompt("infrese la temperatura en °C"));

let fahrenheit = (celsius * (9/5))+32;
let result;

switch(weather){
    case "a)" :
    result = "soleado";
    break;
    case "b)" :
    result = "nublado";
    break;
    case "c)" :
    result = "lluvioso";
    break;
    default:
        console.error("Opcion no valida")
        break;
}
console.log(`En tu ciudad, el día esta ${result} con una temperatura de ${fahrenheit}`)