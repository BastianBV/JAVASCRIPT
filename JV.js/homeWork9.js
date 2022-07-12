
// * Ejercicio 1 
// * Realizar una función que reciba como parametro 1 array de numeros
// * Y devuelva un array con solo los elementos Pares de ese array
// * p.ej.
// * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
// * -> evenOnly( [10, 2, 5] ) -> [10,2]
// * -> evenOnly() -> 'Se necesita un array'
// *
// * Pista / Hint, debemos iterar el array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (numeros == ""){
    console.log("se necesita un array")
}
 
const numerosPares = (num) => {
    if(num % 2 === 0){
        return true;
    }
    else
    return false;
}
let resultado = numero.fiulter(numerosPares);

console.log(resultado);





// * Ejercicio 2 *Opcional
// * Función que reciba como parámetro una array de strings
// * y devuelva el primer y último carácter de cada string
// * p.ej.
// * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
// *
// * Pista / Hint, debemos iterar el array



const firstAndLast = (array) =>{
    if(typeof array === 'undefined'){
        return "se nesesita un array"
    }

    let arrayFirstLast = [];
    for(let i = 0; i < array.length; i++){

        let string = array[i];
        let firstLast= string[0] + string.substr(string.length -1);
        arrayFirstLast.push(firstLast);
    }
return arrayFirstLast;
}

console.log(firstAndLast(['hola','mundo']));
console.log(firstAndLast(['hola','todos']));
console.log(firstAndLast());