//todo Eventos 
//* los Nodos dentro del DOM son sutentives a cosas
//* Esto sucede sobre los elementos de nuestro DOM y podemos capturarlos y reaccionar a ellos, manipularlos a nuestro favor

//* Tipos de eventos
    //^ Eventos Automaticos (cuando carga una pagina o una imagen)
    //^ Eventos generados por usuarios 


//* Eventos en linea --> Online Events 
//^ Es cuando generamos en etiquetas html 

// const funEvent = () => {
//     alert("Se perdio en foco de atención")
//     console.log('');
// }



//todo EventListener 
//* Es un Metodo (FUNCIONES) de los elementos de DOM vinculada a nuestro HTML , y cada elemento de HTML se tranforma en un elemento 

// document.querySelector('.btn') 
// btn1.addEventListener('click')


//todo  Repaso AddEventListeners 








//? Destructuracion de objetos
// const objetPrueba = {
//     firstName: 'koder',
//     lastName: 'Kodemia',
//     isActive: true,
// }

// let { firstName, lastName, isActive } = objetPrueba

// console.log(firstName, lastName, isActive)

//TODO EJERCICIO 1

//* 1 Menejo de envento en el boton "show Card"
//* Pasos
//* 1. Seleccionar el holder de la card
//* 2. seleccionar quien detona el evento
//* 3. agregar un listener al detonador
//* 4. insertar html al holder
//* 5. Opcional insertar elemento en el card para eliminarla

// btnShowCardElement.addEventListener('click',()=> {
//     div2ShowCard.innerHTML = `<div class="card" style="width: 18rem;> 
//     <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card Title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
//         <a href="#" id="closeCard" class="btn btn-primary"> Delete </a>
//     </div>
//     </div>`

//     const closeCardButton = document.querySelector("#closeCard");
//     closeCardButton.addEventListener('click', ()=>{
//         div2ShowCard.innerHTML = '';
//     })
// })


//TODO EJERCICIO 2

// const text_div = document.querySelector(".text_div");
// const input_text = document.querySelector(".input_text");

// input_text.addEventListener('input', (e) => {
//     let texto = e.target.value;
//     text_div.innerHTML = `El Texto ingresado es: ${texto}`;
// });

// const btn_clear = document.querySelector('.btn_clear');

// btn_clear.addEventListener('click', () => {
//     text_div.innerHTML = "";
//     input_text.value = "";
// })


//TODO EJERCICIO 3




//^ Declarar una funcion que dado un string, nos filtre los usuarios contenido en un array
//^Buscar las coincidencias en los cmapos -> "name" "username" "email"

// const filterUSers = (str) => {
//     let strF = str.toLowerCase()
//     let usuariosFiltrados = users.filter((user)=> {

//         if(
//             user.name.toLocaleLowerCase().match(strF) ||
//             user.username.toLocaleLowerCase().match(strF) ||
//             user.email.toLocaleLowerCase().match(strF)
//             ) {
//             return user
//         }

//     })

//     return usuariosFiltrados
// }


// * Escuchar algun evento en el input y llamar a la funcion 
//* de filtrado cuando se detone el evento en el boton "buscar" con el valor del mismo y hacerle console.log()

 // ? Tomando elemento input
// let input = document.querySelector('.input_text')

 // ? Tomando elemento boton "buscar"
// let findButton = document.querySelector('.find_user')

// ? Agregando evento "click" al boton para ejecutar el filtrado cuando se detono el mismo
// findButton.addEventListener('click', () =>{

// ? Tomando el valor del input
//    strToFilter = input.value

// ? Ejecutando el filtrado
//    result = filterUSers(strToFilter)

//     Array.forEach

//     filter 
//     map 
//     forEach 

// ? Imprimiendo el resultado en consola 
//    console.log(result)
// })

// * 3 Renderizar/ Pintar / Insertar en mi HTML los usuarios filtrados
// paso 3.1 ca´turar mi user holderpor cada usuario renderizar una card un li o


// const insertUsers = (arr) => {
//     let list = document.querySelector('#list_users') 

//     list.innerHTML = '' 
//     arr.forEach((user) => {
//         list.innerHTML += `<li class="list-group-item d-flex justify-content-between aling-items-start bg-secondary bg-gradient rounded-2 border border-1 border-secondary m-2">
//         <div class="ms-2 me-auto">
//         <div class="fw-blod">${user.name}</div>
//         ${user.username}
//         </div>
//         </li>`
//     })
// }


//* Extra -> Modificar lo necesario para que 
//* 1- se pinte la lista completa al cargar la pagina 
//*     1.1 hint -> 'DOMContentLoaded'
//* 2- Se haga la busqueda en cada caracter que se agregue a mi campo de busqueda 

 


//TODO---- BOM - Browser Object Model

//^ 


