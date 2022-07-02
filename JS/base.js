
//! Datos en Js 
    //reglas o buenas practicas 
        // No iniciar con digitos 
            //let 9variable = 9; ---> ERROR 
        // No acepta palabra reservadas 
            // Let else =  'else'----> ERROR  
        // Consideracion: Sensible a las Mayus y Minis 
        // Buena Practica: camelCase 99% - PascalCase --> Clases - "CONSTANTE" En mayuscula 
        // Buena Practica: Naming descriptivo --> let estudiantesKodemia = 'koders'

//! Variables y Constatnte
      // Variable  =  Mutabilidad = VAR - LET
      // Constante = No Cambia  = CONST 
// let edadkoder = 25        
// var alturakoder = 185 //!Nos permite redefinir 
            

// palabraReservada -> identificador -> operdadorAsignacion -> Valor
// console.log(edadkoder);
// console.log(alturakoder);     
//Terminologia 
              // Declaracion 
              // Asignacion o Definicion
              // Inicializacion

            //   let Koder;
              
              
            //   Koder = 'Jose';

            //   let koder2 = 'Sandra'

//camelCase
//PascalCase
//const CONSTANTE = 1; (siempre finalizar con ";")

            // RECOMENDACION/ Buena practica siempre usar LET 

            //let user = 'Sebastian';

            //var user = 'Koder';

            //console.log (user)


            //! REGLA DE INVOCACION

                //Primero va el LET y VAR 
                // Segundo Console.log

//! CONSTATNTES
        // URL -> Const
        // Pi --> Const
        // OUNTAJEMAXIMO -> const
        //const URL = 'www.google.com';
      
        //URL  = 'Test' --> Error

//! Diversas Formas de Declaracion e Inicializacion

//let primerPuntaje; -> undefined 

//let segundoPuntaje = 100;

//let tercerPuntaje = segundoPuntaje; 

//console.log (tercerPuntaje)

//!Declaracion multiple 

    //let primerKoder, segundoKoder, tercerKoder;

    //primerKoder = 'Sebastian';

    //let cuartoKoder = 'Marco';
        //quintoKoder = 'Sofy';
        //sextoKoder = 'Eduardo';
    //console.log (cuartoKoder);


//! Tipos de Datos
    // Primitivos 
        // String -> Una cadena de caracteres, Comillas simples o dobles 
             // let academia = 'Kodemia'; "Kodemia"; 'Kodemia\'s';
        // Numbers - Numeros
             // let primerNumero = 20;
             // let segundoNumero = 10.05; 
        // Booleans - Boleanos 
             // true | False 
        // Undefined - Indefinido
             //  Representa la usencia de un valor 
                //let indefinido = Undefined 
        // Null - Nulo 
             //  Hace refencia a un valor nulo 

    // No Primitivos - reference Data type 
            //  // Array --> 
            //     // Colecciones de datos indexados 
            //          let myFirstArray = [1,2,3,4];

            //          let myFirstArray = ['a', 2, true];

            //     // Objects -> Objetos 
            //          let user ={firstname: 'Sebastian', last_name: 'Bastian'};
                     
            //          console.log(user)
//! Typeof Operator 

    // let numerico = 11; 
    // let tect = 'esto es un texto';
    // console.log(typeof numerico);
    // console.log(typeof text);
    // console.log(typeof console);


//! Concatenacion de strings
  // Usar el operador de suma +
    //  let primerTexto = 'Soy la primera parte';
    //  let segundoTexto = 'y yo la segunda parte';
    //  console.log(primerTexto + segundoTexto);

   // Templates Literals 
    // ``-> backtick
        // console.log(`Esto es un template literals ${primerNombre}`)  


//! Formas de hacer output 
//         console.log('esto es un log');
//         console.warn('esto es una advertencia');   
//         console.error('esto es un error');  
//         console.group('20g');
//         console.groupEnd('20g');
//         console.time('g');
//         console.timeEnd('g');
//         alert('esto es una alerta');
//         // el console es un objeto que abarca varias operaciones 

// let data = prompt('Ingreso de datos');   
// console.log('esto es mi data');
//     window.console.log(`asdasfas`)
//    window.promt()
        
        
//! Operadores 
   //Aritmeticos - operaciones aritmeticas (numericas)

//    //suma 
//    +
//    //resta 
//    -
//    //multiplicacion 
//    *
//    //division 
//    /
//    //Modulo o Remainder
//    %

//    //Incremento - Increment
//    ++X
//    x++ 
//    // Decremento - Decrement
//    --x
//    x--
//    // Potencia - Potence
//    x**y


//! Operadores de Asignacion 
    // = 
    // let = 2 --> asignar un valor 
    // +=
    // a += 1;
    // -> a = a + 1;

    // -= 
    // a -= 1;
    // -> a = a - 1;

    // *=
    // a*= 2;
    // -> a = a * 2 

    // /= 
    // a /= 2; 
    // ->a = a / 2; 

    // %= 
    // a %= 2 
    // -> a = a % 2

//! Operadores de Comparacion 

 // == comparacion
    //   let a = 1;
    //   let b = 1; 
    //   console.log(a == b); = True;

 // === comparacion Estricta 
    // let a = 1;
    // let b = `1`; 
    //    console.log(a === b); = False; // porque lo interpreta  como un string `1` tiene que ser tipo de mismo dato 

 // / != Not Equal
    // let a = 1;
    // let b = 1; 
    // console.log(a!=b); = False 
    
 // / != Not Equal Stricto 
    // let a = 1;
    // let b = `1`;
    // console.log(a!=b); = False // no es el mismo tipo de dato, b es un string 

// > - Mayor que ... 
    // let a = 10;
    // let b = 9; 
    // console.log(a>b); = True 

// < - Menor que ...
    // let a = 10;
    // let b = 9; 
    // console.log(a<b); = False
    
// >= - Mayor o Igual que ...
    // let a = 10;
    // let b = 9; 
    // console.log(a>=b); = True 
    
 // <= - Menor o Igual que ...
    // let a = 10;
    // let b = 9; 
    // console.log(a<=b); = False


//! Operadores Logicos 

    // AND -> &&
    //    true&&true = true 
    //    false&&true = false
    //    true&&false = false

// OR  -> ||
    //    true || true = true
    //    false|| true = true
    //    true || false = false
    //    false || false = false 

 // NOT -> !
    //    let x = 10 + 10 * 3; 
       

       