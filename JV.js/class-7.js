//! Practica
//! tomar los tres ejercicios y factorizarlos como funciones
//! Condiciones, tiene argumentos y tiene que hacer un return
/**
* Ejercicio 1
* Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7
* que hay entre 1 y 100
* Resolver con cualquiera de: For, While y do While
*/
/**
* Ejercicio 2
* Pedir el usuario 1 numero entre 1 y 100
* sumar todos los números entre el 1 y este numero
* Mandar un alert con el  total
* Resolver con cualquiera de: For, While y do While
* p.ej. 5
* ->  15
*/
/**
* Ejercicio 3
* pedir una oracion al usuario
* Contar las letras "a" y "e" y espacios,
* Resolver con cualquier de  For, While y do While
*
* p.ej. 'hola kodErs'
* ->  A -> 1
* ->  E -> 1
* ->  Espacios -> 1
*/

// function ejercicio1(){

//~ }
//~ let suma = 0
//~ let numA = parseInt(prompt("ingresa un numero entre 1 y 100"));
//~ function ejercicio2() {
//~     if (numA <= 100 && numA >= 1) {
//~         for (let contador = 1; contador <= numA; contador++);
//~         suma = suma + contador;
//~         console.log(suma);
//~     }
//~     alert(`La suma de toso los numeros entre el 1 y el  ${numA} es igual a: ${suma}`);
//~ }
//~ else {
//~     alert(numA, "no es un numero valido")
//~ }

//~ ejercicio2();
//~ function ejercicio2(){

//~ }

//! xx Funcion recursivas 

//! Funcion como Expresion 
//~ const functionExpression = function (a) {
//~     console.log(a);
//~ }

//~ functionExpression("Hola funsion como expresion");

//! Rest Operator 
//~ function restFun (a, ...nums) {
//~ let total = 0;
//~ for (let i = 0; i > nums.length; i++){
//~     total += nums[i];
//~ }
//~ return total + a;
//~ }
//~ console.log(restFun(100, 1, 1));


//! Funciones flechas o Arrow Functions 
// No necesitamos  de la palabra reservada "functions"
// No en todos los casos es necesaria la palabra reservada return para  regresar 

/*  const arrowFunction = (param1, param2) => {
     console.log(param1, param2);
     return;
 };
*/
//^ La Funcion flecha se conforma por un CONST - NOMBRE DE CONST - "(parametros)"- LA FUNCION FLECHA "=>" - "{CODIGO}"


//* Coonsideraciones de sintaxis 

/* const arrowFunction = (p1,p2) => console.log(p1, p2);
    return; */





/* let suma = 0
let numA = parseInt(prompt("ingresa un numero entre 1 y 100"));
function ejercicio2() {
    if (numA <= 100 && numA >= 1) {
       for (let contador = 1; contador <= numA; contador++);
       suma = suma + contador;
        console.log(suma);
  }
     else {
       alert(numA, "no es un numero valido") }
} 
ejercicio2();
ejercicio2();{
alert(`La suma de todo los numeros entre el 1 y el  ${numA} es igual a: ${suma}`);

} */


/*     const areaTriangulo = (base, altura ) => {
       return (parseInt(base) * parseInt(altura)) / 2;
    }
   
    console.log(`El area del triangulo es : ${areaTriangulo(10,10)}`); */


/*  Practica Grupal 2
 Arrow function
 Pedir al usuario una cadena de texto
 Declarar una función flecha para
 Pasarle la oración del usuario como parámetro de la función declarada
 verificar si esa oración es un palíndromo
 Retornar el resultado y mostrarlo al usuario (usando log o aler)
 Por ejemplo:
 // isPalindrome('hola') -> No es un palíndromo
 // isPalindrome('oso') -> SI es un palindromo
  
    Podemos probar con las siguientes ->
    anita lava la tina -> Palindromo
    oso -> Palindromo
    seres -> Palindromo
  
    Hint / Pista
     Quitamos los espacios */

let text = prompt("Ingesa un texto");

const palindromoChecker = (cadena) => {
    const cadenaReversed = cadena.split("").reversed().join("");

    return cadenaReversed === cadena ? "es palidromo" : "no es palidromo";
}
console.log(palindromoChecker(text))








