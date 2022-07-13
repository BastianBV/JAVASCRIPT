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
// function checkAdult(age) {
//     return age >= 18;
// }

// const ageArray = [34, 23, 20, 26, 12];
// let check = ageArray.every(checkAdult); 

// if (!check) {
//     console.log("Todas las miembros deben ser al menos mayor de 18.")
// }

//  let check1 = ageArray.every(age => age >= 18); 
//  console.log(check1);




//todo Callback functions ( sirve para anidar otra funcion)
        //* En JS las funciones son first class citizen

        //? Caso 1 --> Funciones indenpendientes 
// const a = (msg) => {
//     console.log(`esto es el mensaje`, msg)
// }

// const b =() =>{
//     let msg = prompt('ingeresa mensaje:')
//     return msg
// }

// let res = b ();

// a(res);


        //? Caso 2 ---> Callaback Functions ( sirve para anidar otra funcion)

        // const a = (msg) => {
        //     console.log ("Esto es el mensaje:");
        // }

        // const b = (callback) => {
        //     msg = 'este es el mensaje';
        //     callback(msg);
        // }

        // b(a);


//todo ---- Metodos funcionales de Arrays 

    //~ 1 ForEach - ( Imprime cada elemento del Array)
        // Recibe un callback function -> currentValue, index, Copia Array
        // No necesita un return 
        // No modifica
        // La logica se ejecuta dentro de su bloque de codigo 

        // let arrayTest = ['julio', 'Sofy', 'Chris', 'Jose']

        // const callFun = (currentValue, index, array) => {
        //     console.log("current Value:", currentValue);
        //     console.log("index", index);
        //     console.log("array", array);
        // }

        // arrayTest.forEach(callFun);


        // let ages =[22,25,30,25,40];

        // for(let i = 0; i < ages.length; i++){
        //     ages[i] += 2;
        // }
        // let newAges = [];

        // ages.forEach((cv) => {
        //     cv += 4
        //     newAges.push(cv);
        // });
        // console.log(ages);


/*
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/


// const ciudades = ["mexicO", 'Los AngelEs', 'RIo', 'esTAMBUL'];
// let ciudadesMay = [];

// ciudades.forEach((cv)=>{
// ciudadesMay.push(cv.toLocaleLowerCase);

// })


//todo ----2. MAP ---> (Sirve para hacer una nueva array)
    //* 2.1 Crea un nuevo array transformado
    //* 2.2 Recibe un callback function con los argumentos definidos 
    //* 2.3 Crea una nueva array con las modificaciones indicadas
    //* 2.4 La funcion callback debe de tener un return 
    //* 2.5 No cambia el array original
    //* 2.6 Debe usarse si se va a crear un nuevo array

    // // const number = [1,2,3,4,5];

    // // numbers.map((cv, index, arr) => {
    // //     console.log(cd, index, arr);
    // //     return cd + 10;
    // // });

    // // console.log(arr);



/*
* Escribir una función
* Reciba como parámetro Un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs'])
* -> ['México','Rio', 'Los Angeles']
* Usar el método de array Map
*/


// let citys = ['mexico', 'RIo', 'Los Angeles', 'esTAMBUL'];

//  cities2 = cities.map(city => city[0].toUpperCase()+city.slice(1,city.length).toLowerCase());
//  console.log(cities);

//todo ---3. Filter ---> (Sirve para filtrar los elementos que planteamos)
//*3.1 Crea un nuevo array filtrado
//*3.2 Recibe un callback function con los argumentos definidos 
    //*3.2.1 Current Value 
    //*3.2.2 Index
    //*3.2.3 Array Objetivo

//*3.3 El filtrado lo hacemos dentro de la funcion callback
//*3.4 Crea un nuevo arrat con las modificacipoes indicadas 
//*3.6 La funcion callback debe tener un return

// let soloPares = newArr.filter((currentValue, index, copiaArrOriginal) => {
//     if (currentValue % 2 === 0) {
//         return currentValue;
//     }
// })


//todo ----4 Reduce 
    //* Recibe dos argumento un callback fun y un initiaValue
    //* Su callback recibe 4 paramentros predefinidos 
    //~ Total o Previos Value o Acumulador Cv, Index, Copia Array
//!  ejemplo1
    // let arr = [1, 2, 3, 4, 5]

    // let result = arr.reduce((acumulador, currentValue, index, array) => {
    //         acumulador += currentValue 
    //         return acumulador
    // } , 0)
    // console.log(result)

//! ejemplo2
    // const koders = ['kelly', 'sebas','Adrian']

    // result = koders.reduce((acc, cv) => {
    //   acc.push(cv[0]);
    //   return acc;
    //  }, []);


    //  result2 = koders.reduce((acc, cv) => {
    //    acc += `${cv} `;
    //    return acc;
    //   }, '');
     

    // console.log(result)
    // console.log(result2)


    //! Practica 12/07/22

 // Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
 
// getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD   

// const koders = ['Ferdinand', 'Jose','Maria', 'Dora']

// result = koders.reduce((acc, cv) => {
//     acc += cv[0];
//     return acc;
// }, "");

// console.log(result);




//todo Extra -> Multidimensional Arrays --> ( Es un Array que contiene un Array)

// const multi = [[1,2,3], ['s', 'f'], 'string']
// console.log(typeof multi)

// multi.forEach((cv) => {
//     if(cv instanceof Array){
//         cv.forEach((innerValue) => {
//             console.log(innerValue)
//         })
//     } else {
//         console.log(innerValue)
//     } 
// cv.forEach((innerValue) => {
//     console.log(innerValue);
// })
// })




//!Practica
//* Dado una arreglo compuesto por arreglos,
// * crea una función que calcule la suma de los arreglos
// *
// * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
// * -> 18

// let arrays =  [ [1,2,3] , [1,3,2] , [3,2,1] ]

// const sumarArray = (imput) => {
//     let arrayAccum = 0
//     InputDeviceInfo.forEach(item => {
//         let result = item.reduce((accum, cv) => {
//             accum += cv
//             return accum
//         },0)
//         arrayAccum += result
//     }); return arrayAccum
// }

// sumarArray(arrays)
// console.log(sumarArray(arrays))


//!Practica
// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42


let numeros = [ 1, -4, 12, 0, -3, 29, -150]


