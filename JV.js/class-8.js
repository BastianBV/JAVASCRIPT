//todo ---- ARRAYS -----> '[]'
//* Es una coleccion de datos que puede alvergar otros datos, cualquier tipo de dato 

/* let koder1 = 'marina';
let koder2 = 'marco';

const koders = [
   'mariana',
   'marco',
   'breeze', 
   'yo',
   62,
   undefined,
   ["string", 123, undefined]
];

//^ Bracket Notation --> []
//^ Indexesas -> 0.1.2.3


console.log(koders[5]); */

//todo --------Modificar un ARRAY
/* const koders = [
    'mariana',
    'marco',
    'breeze', 
    'yo',
    ["string", 123, undefined]
 ];
 koders[2] = "marco"
 
 console.log(koders[2]); */

 //console.log(typeof koders); ---> objeto

/*  let t = 22; 
 console.log(Array.isArray(koders));


 console.log(koders instanceof Array); -----> */

//todo ---- Metodos de ARRAY
//? Push --> Agrega un elemento al final del array
/* const koders = ['mariana', 'marco','breeze', 'yo', ["string", 123, undefined]
 ];
 koders.push("luis");

 console.log(koders);
 */
 //? POP ----> Elimina el ultimo elemento de un array

/*  const koders = ['mariana', 'marco','breeze', 'yo', ["string", 123, undefined]
 ];
 koders.pop();

 console.log(koders); */


//todo ARRAY (EVERY) 
//* Prueba si todos los elementos pasan la función de prueba dada
function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); 

if (!check) {
    console.log("Todas las miembros deben ser al menos mayor de 18.")
}

 let check1 = ageArray.every(age => age >= 18); 
 console.log(check1);