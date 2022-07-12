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


//todo ----2. MAP 
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


let citys = ['mexico', 'RIo', 'Los Angeles', 'esTAMBUL'];

 cities2 = cities.map(city => city[0].toUpperCase()+city.slice(1,city.length).toLowerCase());
 console.log(cities);