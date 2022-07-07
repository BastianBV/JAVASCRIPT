//! Funciones
    // -> Son elementos esenciales del desarrollo y nos ayudan que nos permiten encapsular lineas de codigo (statements) en un indentificador al  cual podemos hacerle referencia para reutilizar las mismas
    //     * Ojo -> funciones anonimas


//! Para utilizar funciones : ...
//! 1° Declara la funcion -> 
      //1.1. Utilizando la palabra " FUNCTION"
      //1.2. Identificador de la funcion 
      //1.3. El Parametro o la lista de parametros, abrazadas entre parentesis "()" -> (paran1, paran2 .....)
      //1.4. Bloque de codigo -> {.... Codigo a ejecutar}
      //1.5. Opcional -> Retorno

      //! Ejemplo de funcion :
    //   function functionSuma() {
    //  console.log("Esto es una funcion");
    //   }


      //! Paso 2. Invocar o llamar la funcion
       //* Declarar una funcion no la ejecuta 
       //2.1. Invocarla o llamarla de forma tacita 
       //2.2. -> funcionSuma()
       //2.3 Al invocar la funcion estamos ejecutando la linea de codigo definidas en al declaracion
       //2.4. En caso tener parametro definidos es necesario pasarle dichos parametros 
       //* Es recomendable un nombre descriptivo   
        //  functionSuma();


       //Practica
       //Declarar y invocar una funcion cualquiera
       //Recomendacion: Usar alguno de los ejercicios que se llevaron acabo en las clases anteriores 

          
    //     function weather() {
    //         let weather = prompt(`Como es el clima en tu cidudad?, seleccione una opcion /n a) soleado /n b) nublado /n c) lluvioso `);
    //         let celsius = parseInt(prompt("infrese la temperatura en °C"));
            
    //         let fahrenheit = (celsius * (9/5))+32;
    //         let result;
            
    //         switch(weather){
    //             case "a)" :
    //             result = "soleado";
    //             break;
    //             case "b)" :
    //             result = "nublado";
    //             break;
    //             case "c)" :
    //             result = "lluvioso";
    //             break;
    //             default:
    //                 console.error("Opcion no valida")
    //                 break;
    //         }
    //         console.log(`En tu ciudad, el día esta ${result} con una temperatura de ${fahrenheit}`)
    //    }


    //! 3. Retorno
    //! Utilizamos la palabra reservada "return"
       //3.1 Las funciones retornan por defecto "undefined"
    // //    function imprimeMensaje() {
    // //     console.log(imprimeMensaje());
    // //            return "Hola";
    // //    }
               
    // //     let saludo = imprimeMensaje();
        
    // //     if(saludo === 'Hola');

       //3.3 El codigo de sigue  al return no se ejecuta!



    //!Parametros
    
    //! Son variables que toman la funcion al momento de su definicion  -> son neutros o agnosticos

    // function imprimeMensaje(p1, p2 = 20) {
    //     // console.log(p1, p2);
    //     // let result;
    //     // return 2 + 3 ; 

    // }
      
    //! argumento -> son las variables que toma la funcion al momento de ser invocada -> Son conocidos o reltivamente conocidos

    // imprimeMensaje("Hola", "Mundo");
    // "hola".substring()

    // function suma(a,b) {
    //     console.log(a, b)
        //  return a + b;
    // }
    // console.log(suma(1));

    //! Valores por defecto 

    // prompt()

   //! Practica
//     Declarar una función que tome uno o más argumentos y haga un retorno, Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
//    Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals

// function triangulo(base,altura){
//     let base = parseInt(prompt(`Base`))         
// let altura = parseInt(prompt(`Altura`))
// // // let area = parseInt(prompt(`Area`))
// let area = 0

// if (base <= 0 || altura <= 0)
// {
//         console.log("los datos que proporcionas no son validos")
// }
// else if (base > 0 && altura > 0){
//         area = (base * altura)/2
//         console.log("area",area)
        
// }
// console.log(base,altura);
// return base * altura / 2;
// }
// console.log()

//! Mutabilidad de argumentos 
// let a = 10; 

// function suma(num1, num2 = 10) {
//     let a = num1 + num2;
//     console.log("a en la funcion", a);
//     return a
// }

// console.log(suma(a));

// console.log("a global", a);

//! Lexical Scope -> podemos invocar variables hacia dentro, pero nunca hacia fuera 


// Passing by refence 
// {First name : ferdinan} -> objetos
//[] -> arrays 



//! Hosting
// console.log(test);
// var test = 1;


// function t(){
//     function b() {
// //codigo
//     }
// b();
// }
// console.log("a");
// console.log(t());


