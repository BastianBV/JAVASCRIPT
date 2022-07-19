//todo ---Objetos Colecciones de elementos (Key calue paairs )

first_name:" Bastian";

//~ Cada Objeto tiene propiedas  que cumplen ciertas acciones "METODOS " --- Identidad  = Objeto tiene caracteristicas , propiedades, Lleva  cabo acciones -> Metodos 

//~ Los objetos en JS son colleciones de datos almacenados en una sola variable 

// let academia  = {
//     nombre: "Kodemia",
//     numeroEstudiantes: 80,
//     areaEstudio: 'Programacion'.
//     numeroProfesores: 20,
//     materia:[
//         'html',
//         'css',
//         'linux',
//         'JavaScript'
//      ],
//     }

    //todo --- Acceder a propiedades 
    //todo --- Bracket notation
    //todo --- -> []

//~ Objeto[propiedad]

// console.log(academia["nombre"]["html"]);

//todo --- Dot Notations 
//todo --- -> .

//*objeto propiedad 
// console.log(academia.nombre):

//! Declaracion de objeto multilinea
// let academia = {
//     nombreacademia: "kodemia",
//     numeroEstudiantes: 80,
//     areaEstudio: "Programacion",
//     numeroProfesores: 20,
//     materia: ["html", "CSS", "Linux", "JavaScript"],
//     materiaProfesor: {
//       html: "Alfredo",
//       backend: "Ale",
//       talleress: {
//         linux: "Alfred",
//         git: "Ferdinand",
//       },
//     },
//   };
  
  // ! Acceder a propiedades
  // ! Bracket notation
  // ! -> []
  // Objeto[propiedad]
  // console.log(academia["materiaProfesor"]["html"]);
  // let academiaNombre = "nombre";
  
  // console.log(academia[academiaNombre]);
  
  // ! Dot notations
  // ! -> .
  // objeto.propiedad
  // console.log(academia.nombre);


//*Dado el siguiente lleva a cabo las las operaciones indicadas

// const player = {
//  score: 88888,
//  level: 7,
//  lives: 2,
//  vitalEnergy: 1,
//  isAlive: true,
// };
 
// console.log(jugador);
 
 
// ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
// Realizar código para llevar a cabo las operaciones
 
// ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
// Realizar código para llevar a cabo las operaciones
 
// ! 3 Revisamos nuestro jugador
// Realizar código para llevar a cabo las operaciones
 
 
 
// ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// Realizar código para llevar a cabo las operaciones

// const player = {
//      score: 88888,
//      level: 7,
//      lives: 2,
//      vitalEnergy: 1,
//      isAlive: true,
//     };
// if(player.vitalEnergy <= 0) {
//     player.isAlive = false 
//     console.log(player.isAlive)
// }else{
//     console.log("Sigue estando vivo")
// }



// player.vitalEnergy <= 0 ? console.log("as muerto") : console.log("sigues con vida ")
// console.log(player.vitalEnergy - 25);

// player.vitalEnergy <= 0  ? console.log(player.isAlive = false) : console.log(player.isAlive = true )



//todo --- Agregar nuevas  propiedades 

// const koder = {
//     firstName:'Luis',
//     lasName:'Rdz'
// }

// koder.modiles= {html: true, css: true };

// console.log(koder);


//todo ---- Eliminar Propiedades de objeto 

// delete koder.modules;


//todo --- Iterar sobre objetos 

// fot (x in koder ) {
//     console.log(x)
// }


//todo Dado el siguiente objeto realiza las siguientes operaciones 
// Un log donde veamos la suma total de notas
// Opcional - Un log donde veamos el promedio de las notas a dos decimales
// Hint, use toFixed() method

// const grades = {
//     first_test: 7.5,
//     second_test: 10,
//     third_test: 6,
//    };
//    grades.points={[first_test]+[second_test]+[third_test]}
//    for (points in grades) {
//     console.log(grades[points] );
//   }


//todo Metodos de objetos 

// const koder = {
//   first_name:'Jose'
//   last_name:'Perez'

//   fullName: function() {
//     ////codigo
//     return this.first_name + ' ' + this.last_name
//   }
// }

// console.log(koder.fullName())

// 'hola'.trim()

// const string = {
//   length:
//   trum: function(){
//     if(this.startwith(' '))
//   }
// }


//todo Functions constructuras de objetos 


// function Mentor (nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
// }

// const alfredo = new Mentor('Alfredo', 'Pete', 20)
// const ferdinand= new Mentor('Ferdinand', 'Bra', 30)

// console.log(alfredo)
// console.log(ferdinand)

//todo  Clases en JS 

// class car {
//   constructor(color, modelo){ //todo Constructor es necesario para todas las classes 
//     this.color = color;
//     this.modelo = modelo;
//   }
// }

// let coche1 = new car('rojo', 'modelo1');

// console.log(coche1);


