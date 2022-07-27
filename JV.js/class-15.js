//TODO ----- AJAX - Asynchronous JavaScript and XML 
//* Nos ayuda hacer RECUEST y RESPONDS a CLIENTE - SERVIDOR 

//TODO--- Arquitecturas 
    //^ Monolica 
    //^ Cliente - Servidor 

//TODO-- CRUD 
//~ C -> Create -> Crear 
//~ R -> Read   -> List - Details
//~ U -> Update -> Upgradear: Global - Parcial
//~ D -> Delete -> Eliminar cualquiera de nuestras identidades 



// Propiedades 
// readyState
// 0: request not intialized 
    // 1: server connection established 
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready 

    // Status - se refiere la respuesta 


//todo--- JSON
//^ Es una anotacion de JS, sirve para compartir y almacenar DATA, Transferir entre el REQUEST Y EL RESPONSE

// { }
// key: value 

// const user = {
//     userName: 'Koder224',
//     email : 'Ferdinand@koder.mx',

// }
// console.log(user)

        //^ JSON Stringify Transforma el JSON en objeto 
        //^ Para Enviar Request
        //? JSON.stringify(<Objeto></Objeto>)
        
        //^ JSON  Parse Trasforma a objetos a JSON 
        //^ Para Enviar Response
        //? JSON.parse(<json></json>)
        

//Todo- XMLHttpRequest 

//^ -Es un objeto-
    //* Paso a paso para su uso 
    //? Instanciamos nuestro objeto
    //! SIEMPRE SE INICIA CON NEW ejemplo: ( Const reques = new XMLHttpRequest()) 
// const xmlRe = new XMLHttpRequest()

// console.log(xmlRe);

    //? Definir un callback en nuestro evento onload 

    // xmlRe.onload = (data) => {
    //     console.log(data.target.responseText)
    // }

    //? Abrir y setear nuestra peticion 
    // request.open(<Metodo http>, <direccion Objeto>)

    // xmlRe.open('GET', 'README.md')
    // console.log(xmlRe)


    //? Enviar nuestra peticion
    // xmlRe.send()


    //TODO Metodo HTTP - Verbos HTTP 
    // GET     -> Read 
    // POST    -> Create
    // PUT     -> Update : Global
    // PATCH   -> Update : Parcial
    // DELETE  -> Delete

    //todo-- API - Application programming interface 
    //^ Es la interfaz entre aplicaciones 
    //^ Tiene diferentes ENDPOINT - Accesos a los recursos y acciones 



    // let users = [
    //     {
    //       "id": 1,
    //       "name": "Brad Graham",
    //       "username": "Bret",
    //       "email": "Sincere@april.biz",
    //       "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //           "lat": "-37.3159",
    //           "lng": "81.1496"
    //         }
    //       },
    //       "phone": "1-770-736-8031 x56442",
    //       "website": "hildegard.org",
    //       "company": {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //       }
    //     },
    //     {
    //       "id": 2,
    //       "name": "Brad fox",
    //       "username": "Bret",
    //       "email": "Sincere@april.biz",
    //       "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //           "lat": "-37.3159",
    //           "lng": "81.1496"
    //         }
    //       },
    //       "phone": "1-770-736-8031 x56442",
    //       "website": "hildegard.org",
    //       "company": {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //       }
    //     },
    //     {
    //       "id": 3,
    //       "name": "Ervin Howell",
    //       "username": "Antonette",
    //       "email": "Shanna@melissa.tv",
    //       "address": {
    //         "street": "Victor Plains",
    //         "suite": "Suite 879",
    //         "city": "Wisokyburgh",
    //         "zipcode": "90566-7771",
    //         "geo": {
    //           "lat": "-43.9509",
    //           "lng": "-34.4618"
    //         }
    //       },
    //       "phone": "010-692-6593 x09125",
    //       "website": "anastasia.net",
    //       "company": {
    //         "name": "Deckow-Crist",
    //         "catchPhrase": "Proactive didactic contingency",
    //         "bs": "synergize scalable supply-chains"
    //       }
    //     },
    //     {
    //       "id": 4,
    //       "name": "Clementine Bauch",
    //       "username": "Samantha",
    //       "email": "Nathan@yesenia.net",
    //       "address": {
    //         "street": "Douglas Extension",
    //         "suite": "Suite 847",
    //         "city": "McKenziehaven",
    //         "zipcode": "59590-4157",
    //         "geo": {
    //           "lat": "-68.6102",
    //           "lng": "-47.0653"
    //         }
    //       },
    //       "phone": "1-463-123-4447",
    //       "website": "ramiro.info",
    //       "company": {
    //         "name": "Romaguera-Jacobson",
    //         "catchPhrase": "Face to face bifurcated interface",
    //         "bs": "e-enable strategic applications"
    //       }
    //     },
    //     {
    //       "id": 5,
    //       "name": "Patricia Lebsack",
    //       "username": "Karianne",
    //       "email": "Julianne.OConner@kory.org",
    //       "address": {
    //         "street": "Hoeger Mall",
    //         "suite": "Apt. 692",
    //         "city": "South Elvis",
    //         "zipcode": "53919-4257",
    //         "geo": {
    //           "lat": "29.4572",
    //           "lng": "-164.2990"
    //         }
    //       },
    //       "phone": "493-170-9623 x156",
    //       "website": "kale.biz",
    //       "company": {
    //         "name": "Robel-Corkery",
    //         "catchPhrase": "Multi-tiered zero tolerance productivity",
    //         "bs": "transition cutting-edge web services"
    //       }
    //     },
    //     {
    //       "id": 6,
    //       "name": "Patricia Jones",
    //       "username": "Karianne",
    //       "email": "Julianne.OConner@kory.org",
    //       "address": {
    //         "street": "Hoeger Mall",
    //         "suite": "Apt. 692",
    //         "city": "South Elvis",
    //         "zipcode": "53919-4257",
    //         "geo": {
    //           "lat": "29.4572",
    //           "lng": "-164.2990"
    //         }
    //       },
    //       "phone": "493-170-9623 x156",
    //       "website": "kale.biz",
    //       "company": {
    //         "name": "Robel-Corkery",
    //         "catchPhrase": "Multi-tiered zero tolerance productivity",
    //         "bs": "transition cutting-edge web services"
    //       }
    //     },
    //     {
    //       "id": 7,
    //       "name": "Chelsey Dietrich",
    //       "username": "Kamren",
    //       "email": "Lucio_Hettinger@annie.ca",
    //       "address": {
    //         "street": "Skiles Walks",
    //         "suite": "Suite 351",
    //         "city": "Roscoeview",
    //         "zipcode": "33263",
    //         "geo": {
    //           "lat": "-31.8129",
    //           "lng": "62.5342"
    //         }
    //       },
    //       "phone": "(254)954-1289",
    //       "website": "demarco.info",
    //       "company": {
    //         "name": "Keebler LLC",
    //         "catchPhrase": "User-centric fault-tolerant solution",
    //         "bs": "revolutionize end-to-end systems"
    //       }
    //     },
    //     {
    //       "id": 8,
    //       "name": "Mrs. Dennis Schulist",
    //       "username": "Leopoldo_Corkery",
    //       "email": "Karley_Dach@jasper.info",
    //       "address": {
    //         "street": "Norberto Crossing",
    //         "suite": "Apt. 950",
    //         "city": "South Christy",
    //         "zipcode": "23505-1337",
    //         "geo": {
    //           "lat": "-71.4197",
    //           "lng": "71.7478"
    //         }
    //       },
    //       "phone": "1-477-935-8478 x6430",
    //       "website": "ola.org",
    //       "company": {
    //         "name": "Considine-Lockman",
    //         "catchPhrase": "Synchronised bottom-line interface",
    //         "bs": "e-enable innovative applications"
    //       }
    //     },
    //     {
    //       "id": 9,
    //       "name": "Kurtis Weissnat",
    //       "username": "Isaac.Skiles",
    //       "email": "Telly.Hoeger@billy.biz",
    //       "address": {
    //         "street": "Rex Trail",
    //         "suite": "Suite 280",
    //         "city": "Howemouth",
    //         "zipcode": "58804-1099",
    //         "geo": {
    //           "lat": "24.8918",
    //           "lng": "21.8984"
    //         }
    //       },
    //       "phone": "210.067.6132",
    //       "website": "elvis.io",
    //       "company": {
    //         "name": "Johns Group",
    //         "catchPhrase": "Configurable multimedia task-force",
    //         "bs": "generate enterprise e-tailers"
    //       }
    //     },
    //     {
    //       "id": 10,
    //       "name": "Nicholas Runolfsdottir V",
    //       "username": "Maxime_Nienow",
    //       "email": "Sherwood@rosamond.me",
    //       "address": {
    //         "street": "Ellsworth Summit",
    //         "suite": "Suite 729",
    //         "city": "Aliyaview",
    //         "zipcode": "45169",
    //         "geo": {
    //           "lat": "-14.3990",
    //           "lng": "-120.7677"
    //         }
    //       },
    //       "phone": "586.493.6943 x140",
    //       "website": "jacynthe.com",
    //       "company": {
    //         "name": "Abernathy Group",
    //         "catchPhrase": "Implemented secondary concept",
    //         "bs": "e-enable extensible e-tailers"
    //       }
    //     },
    //     {
    //       "id": 11,
    //       "name": "Glenna Reichert",
    //       "username": "Delphine",
    //       "email": "Chaim_McDermott@dana.io",
    //       "address": {
    //         "street": "Dayna Park",
    //         "suite": "Suite 449",
    //         "city": "Bartholomebury",
    //         "zipcode": "76495-3109",
    //         "geo": {
    //           "lat": "24.6463",
    //           "lng": "-168.8889"
    //         }
    //       },
    //       "phone": "(775)976-6794 x41206",
    //       "website": "conrad.com",
    //       "company": {
    //         "name": "Yost and Sons",
    //         "catchPhrase": "Switchable contextually-based project",
    //         "bs": "aggregate real-time technologies"
    //       }
    //     },
    //     {
    //       "id": 12,
    //       "name": "Clementina DuBuque",
    //       "username": "Moriah.Stanton",
    //       "email": "Rey.Isaac@karina.biz",
    //       "address": {
    //         "street": "Kattie Turnpike",
    //         "suite": "Suite 198",
    //         "city": "Lebsackbury",
    //         "zipcode": "31428-2261",
    //         "geo": {
    //           "lat": "-38.2386",
    //           "lng": "57.2232"
    //         }
    //       },
    //       "phone": "024-648-3804",
    //       "website": "ambrose.net",
    //       "company": {
    //         "name": "Hoeger LLC",
    //         "catchPhrase": "Centralized empowering task-force",
    //         "bs": "target end-to-end models"
    //       }
    //     },
    //     {
    //       "id": 13,
    //       "name": "Jorge Camarillo",
    //       "username": "jorge.Camarillo",
    //       "email": "jorge.camarillo@kodemia.mx",
    //       "address": {
    //         "street": "Kattie Turnpike",
    //         "suite": "Suite 198",
    //         "city": "Lebsackbury",
    //         "zipcode": "31428-2261",
    //         "geo": {
    //           "lat": "-38.2386",
    //           "lng": "57.2232"
    //         }
    //       },
    //       "phone": "024-648-3804",
    //       "website": "ambrose.net",
    //       "company": {
    //         "name": "Hoeger LLC",
    //         "catchPhrase": "Centralized empowering task-force",
    //         "bs": "target end-to-end models"
    //       }
    //     },
    //     {
    //       "id": 14,
    //       "name": "Isaac luna",
    //       "username": "Isaac.luna",
    //       "email": "isaac.luna@gmail.com",
    //       "address": {
    //         "street": "Kattie Turnpike",
    //         "suite": "Suite 198",
    //         "city": "Lebsackbury",
    //         "zipcode": "31428-2261",
    //         "geo": {
    //           "lat": "-38.2386",
    //           "lng": "57.2232"
    //         }
    //       },
    //       "phone": "024-648-3804",
    //       "website": "ambrose.net",
    //       "company": {
    //         "name": "Hoeger LLC",
    //         "catchPhrase": "Centralized empowering task-force",
    //         "bs": "target end-to-end models"
    //       }
    //     }
    //   ]


    //   const insertUSers = (arr) => {

    //     let list = document.querySelector('#list_users')
    
    //     list.innerHTML = ''
    
    //     arr.forEach((user) => {
            
    //         list.innerHTML += `
    //         <li class="list-group-item d-flex justify-content-between align-items-start bg-secondary bg-gradient rounded-2 border border-1 border-secondary m-2">
    //         <div class="ms-2 me-auto">
    //           <div class="fw-bold">${user.name}</div>
    //             ${user.username}
    //         </div>
    //       </li>
       
    //         `
    //     })
    //  }  

 //* Declarar (y probar) una funcion que dado un string, nos filte los usaurios contenido en un array
// Buscar las coincidencias en los campos -> "name" "username" "email" 
// ! Paso a paso para su uso 
    // ? Instanciamos nuestro objeto
    const xRe = new XMLHttpRequest()
    // console.log(xRe)
    let users = [];
    // ? Definir un callback en nuestro evento onload 
    xRe.onload = (data) => {
        console.log(data)
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                // console.log(data.target.responseText)
                let result = JSON.parse(data.target.responseText)
                console.log(result)
                users = result;
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }
    } 
    console.log(users)
    //? Abrir y setear nuestra peticion 
    //? request.open(<Metodo htto>, <Direccion objetivo>)

    xRe.open("GET", "https://dummyjson.com/users", false)
    // console.log(xRe)

    //? Enviar nuestra peticion 
    xRe.send()





const filterUSers = (str) => {
  let strF = str.toLowerCase()
  let usuariosFiltrados = users.users.filter((user)=> {

      if(
          user.firstName.toLocaleLowerCase().match(strF) ||
          user.username.toLocaleLowerCase().match(strF) ||
          user.email.toLocaleLowerCase().match(strF)
          ) {
          return user
      }

  })

  return usuariosFiltrados
}

// ? Se hace la construccion de la tabla en HTML con la info del Array original//

let tableBody = document.querySelector("#table_body")

let tableInfo = users.users.reduce((ac,cv, i)=>{
cv = `
<tr>
<th scope="row">${users.users[i].id}</th>
<td>${users.users[i].firstName}</td>
<td>${users.users[i].username}</td>
<td>${users.users[i].email}</td>
</tr>`
console.log(ac)
return ac+cv
},"");

tableBody.innerHTML = tableInfo



//! Parte 2 
/* Escuchar algun evento en el input y llamar a la funcion de filtrado cuando se detone el evento en el boton "buscar" 
con el valor del mismo y hacerle console.log() */

// ? Tomando elemento input
let input = document.querySelector('.input_text')

// ? Tomando elemento boton "buscar"
let findInput = document.querySelector('#find_input')


// ? Agregando evento "input" al boton para ejecutar el filtrado cuando se detono el mismo
findInput.addEventListener('input', () =>{
  let strToFilter = input.value
  console.log(strToFilter)


    // ? Ejecutando el filtrado
   let result = filterUSers(strToFilter)



    // ? Imprimiendo el resultado en consola 
   console.log(result)


    // ? Con esta funcion se reconstruye la tabla con el filtrado de texto   
   let tableInfofiltered = result.reduce((ac,cv, i)=>{
    cv = `
    <tr>
    <th scope="row">${result[i].id}</th>
    <td>${result[i].firstName}</td>
    <td>${result[i].username}</td>
    <td>${result[i].email}</td>
    </tr>`
    console.log(ac)
    return ac+cv
    },"");
    tableBody.innerHTML = tableInfofiltered
})


function AJAX () {
    const http = new XMLHttpRequest ();
    const url = `http://127.0.0.1:5501/JV.js/index2.html`

    http.onreadystatechange = function () {
        if(this.readyState ==4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('response').innerHTML = this.responseText
        }
    }

    http.open('GET', url);
    http.send();
}
document.getElementById('boton').addEventListener('click', function() {
    AJAX();
})