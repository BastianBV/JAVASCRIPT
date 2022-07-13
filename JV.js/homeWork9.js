
// * Ejercicio 1 
// * Realizar una función que reciba como parametro 1 array de numeros
// * Y devuelva un array con solo los elementos Pares de ese array
// * p.ej.
// * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
// * -> evenOnly( [10, 2, 5] ) -> [10,2]
// * -> evenOnly() -> 'Se necesita un array'
// *
// * Pista / Hint, debemos iterar el array

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// if (numeros == "") {
//     console.log("se necesita un array")
// }

// const numerosPares = (num) => {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else
//         return false;
// }
// let resultado = numero.fiulter(numerosPares);

// console.log(resultado);





// * Ejercicio 2 *Opcional
// * Función que reciba como parámetro una array de strings
// * y devuelva el primer y último carácter de cada string
// * p.ej.
// * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
// *
// * Pista / Hint, debemos iterar el array



// const firstAndLast = (array) => {
//     if (typeof array === 'undefined') {
//         return "se nesesita un array"
//     }

//     let arrayFirstLast = [];
//     for (let i = 0; i < array.length; i++) {

//         let string = array[i];
//         let firstLast = string[0] + string.substr(string.length - 1);
//         arrayFirstLast.push(firstLast);
//     }
//     return arrayFirstLast;
// }

// console.log(firstAndLast(['hola', 'mundo']));
// console.log(firstAndLast(['hola', 'todos']));
// console.log(firstAndLast());


//! TAREA DEL LUNES 

//! Tarea 1
//~Función que reciba una palabra
// * Retorna la palabra invertida
// * La reversa del string lo haremos usando métodos de array
// *  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
//* reverseStr('hola mundo') -> 'odnum aloh'

// function reverseStr(string) {
//     let stringArray = Array.from(string)
//     stringReverse = Array.prototype.reverse.call(stringArray);

//     console.log(Array.from(stringReverse))
//     console.log(stringReverse.join(""))
// }

// reverseStr('hola mundo')


//! Tarea 2 
//~ Dado el siguiente arreglo de ciudades
// *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
// * Generar una función que capitalize cada elemento del array
// * => Se puede resolver con .forEach() o .map()



// let capitalize = ['méxicO', 'RIo', 'Los AngelEs ', 'esTAMBUL']

// let arr = capitalize.map((cv, index, arr) => {
//     words = cv.substring(0).toLowerCase()
//     result = words.replace(/(^\w{1})|(\s+\w{1})/g, letterUp => letterUp.toUpperCase());
//     return result;

// });

// console.log(arr);


//! Tarea 3
//~ Dado un arreglo con nombres de personas,
//* Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
// * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
// * -> ['Ana','Ivan','Oscar']
// *
// * => Se puede resolver con .forEach() o .filter()



function onlyNamesVowels(names) {
    var result = names.filter(name => /^[aeiou]/i.test(name));
    console.log(result);
}
onlyNamesVowels(['jorge', 'ana', 'ivan', 'sergio', 'oscar']); 