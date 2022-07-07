//! Ciclos  -> Loops 

// Iteracion -> Repetir una cosa un y otra vez (codigo)

//! "For" Loops 
    //Sintaxis 
    // for (elemento1 ; elemento2 ; elemento3){
    //     //codigo a iterar
    // }

    // elemento1 -> Base de condicion a evaluar -> variable numerica -> Se ejecuta una sola vez

    // elemento2 -> Evaluacion, esta se ejecuta en cada iteracion 

    // elemento3 -> Icremento o decremento -> Se ejecuta con cada iteracion 

    // let text = "Hola Koders!"
    // let fin = text.length
    // for(let i = 0 ; i < fin ; i++) {
    //     // console.log("esto es una iteracion!");
    //     // console.log(`La cuenta va en ${i}`);
    //     // console.log(`5 X ${i} = ${5 * i}`);
    //     // console.log(text.charAt(i));
    //     console.log(text[i]);
    // }



    //! "While" Loop
    // while(elemento1)  {
       // Codigo a iterar
       // ?elemto2 incremento o decremento -> opcional pero recomendado para no entar un overflow
    // }

    // elemto1 -> La condicion a evaluar -> Se ejecuta con cada interacion

    // let j = 0
    // while(j < 3) {
    //     console.log(`5 * ${j} = ${j * 5}`)
    //     j++
    // }

    //! "Do while" 

    // Do{
    //     // Codigo a iterar 
    // } while(elemto1)

    // elemento1 -> ecaluacion booleana -> se ejecuta al final de cada itereacion 
     // ?elemto2 incremento o decremento -> opcional pero recomendado para no entar un overflow

    // let k = 0;
    // do{
    //     console.log(`5 X ${k} = ${k * 5}`)
    //     k++
    // }
    // while(k <= 10);


//! Ejercicios1

//  let text = prompt("Esto es un String string string!")
//  let counttext = 0;
//      for(let i = 0 ; i < counttext ; i++) {
//      //     // console.log("esto es una iteracion!");
//      //     // console.log(`La cuenta va en ${i}`);
//      //     // console.log(`5 X ${i} = ${5 * i}`);
//     //     // console.log(text.charAt(i));
//           console.log(`Numero de vocales ${counttext}`);
//       }



//! Ejercicio2 

//  let text = "Parquimetro"
//  let counttext = text.match(/[dqwzxcdrtgfvbmnhylkjpñ]/gi).length
//  for(let i = 0 ; i < counttext ; i++) {
//     console.log(`Numero de consonantes ${counttext}`);
//  }



//! Ejercicio3

// const opciones = prompt("Elige una opcion del (1-10)");

// let tabla = 0
//     while(tabla < 11) {
//          console.log(`2 * ${tabla} = ${tabla * 2}`)
//          tabla++
// }



//? ejercicio grupal
//! Ejercicio 1
// Pedir el usuario un número entre 10 y 100
// * Imprimir todos los números pares que existen entre 1 y ese número
// * p.ej. 12 -> 2,4,6,8,10,12
// * Usar loops, condicionales...
// hint -> %

// let number = parseInt(prompt("Ingresa un numero entre 10 y 100"));
// if(number < 10 )
// for(let i = 1 ; i <=number ; i++) {
//     if(i % 2 == 0){
//         console.log("esto es numero par " + i);
//     }
// }

//!ejercicio 2
// Pedir al usaurio una oracion
// Imprimir un string con todas las vocales
// Imprimir un string con todas las consonantes
// Resultado de ejemplo
// p.ej. "Hola mundo"
// Consonantes -> hlmnd
// Vocales -> oauo

// let text = parseInt(prompt("Ponga una oracion"));
// let minusculas= texto.toLowerCase().replace(""," ");
// let mayusculas= texto.replace(/[aeiouAEIOU]/gi, '').replace(" ",'');

// for(let i=0; i < texto.length; i++) {
//     if(minusculas[i] === 'a' ||
//        minusculas[i] === 'e' ||
//        minusculas[i] === 'i' ||
//        minusculas[i] === 'o' ||
//        minusculas[i] === 'u')  {
//         console.log(minusculas[i])
//        }
// }

// for(let i=0; i < mayusculas.length; i++){
//     console.log(mayusculas[i]);
// }

//!Ejercicio3
// Pedir el usuario una palabra
// Invertir esa palabra e imprimirla en consola
//  p.ej. 'Hola' -> 'aloh'

// let str = prompt("Ingrese una oración");
// let strReverse = "";
// console.log(str.length);
// for(let i = str.length-1; i >=0; i--) {
//     strReverse = strReverse + str;
// }
// console.group(strReverse);