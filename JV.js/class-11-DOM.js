// todo DOM = Object Model 

//* Es una interfaz para interactuar con estructuras de Mercado en HTML atravez de JavaScript (lo transforma en objeto)
//* Esta formado por NODOS (RAIZ)
//* Podemos llevar acciones  dentro de HTML 
//* DOM = 'document'


//todo Como Seleccionar Elementos 
//^ Seleccion por id 
// let test = document.getElementById('Titulo')
//^ Seleccion por Tag
// let test = document.getElementsByTag('h1')
//^ Seleccion por clase
// let test = document.getElementsByClassName('claseTest)
//^ Seleccion por clase (query)
// let test = document.querySelector('.clasTest')

//^ Seleccion por id  (query)
// let test = document.querySelector('#titulo')

//^ Seleccion por Tag (query)
// let test = document.querySelector('h1')

// let test2 = document.querySelectorAll('h1')

// console.log(test)

//? Seleccionar el elemento 
//* let titulo = document.getElementById('titulo')
//* console.log(titulo)
//todo  Setear Atributos 

// setAtttibute(<nombre attributo>,</nombre>)

//* parrafo.setAttribute('hidden', true)

//todo Obtener atributo 

// setAtttibute(<nombre attributo>)
//* console.log(parrafo.getAttribute('hidden'))

//todo Comprobar la existencia de atributos 

//  hasAttribute(<nombre atributo>)

//* console.log(parrafothasAttribe('hidden'))

//todo Eliminar atributos 

// removeAttribute(<nombre del atributo>)

//* parrafo.removeAttribute('hidden')

// let list = document.querySelector('ul');
// let listItem = document.querySelectorAll('li');

// list.setAttribute('id', 'lista');
// list.setAttribute('class', 'lista');

// listItem.forEach(element => {
//     // element.removeAttribute('class');
//     element.setAttribute('class', 'list_item');
// });


//todo  Crear Elementos en el DOM 
//~ createElemtent(<elemento html a crear>)

//* let list = document.createElement('ul');

//todo Insertar elemento a otro elemento 
//^ appenChild (elemento a agregar)
//* let body = document.querySelector('body');

//* body.appendChild(list);


//*let item = document.createElement('li');


//todo Agregar Texto 

//* item.textContent = 'Esto es texto'

//* list.appendChild(item);
//* console.log(list)

//~--------------------------------------------


//* for (let i = 0; i <= 30; i++) {
//*     let item = document.createElement('li')
//*     item.textContent = `item # ${i}`
//*     list.appendChild(item);
//* }



//todo Insertar elemento antes que otro 

//~ insertBefore(<referencia><elemento a insertar>  despues  <referencia>)

//* let parent = document.querySelector('.parent')

//* let reference = document.querySelector('.reference')

//* let item = document.createElement('p')

//* item.textContent = 'algooo'

//* parent.insertBefore(item, reference)

//* cosnole.log(parent)



//! Practica = Recrear el HTML 

let body = document.querySelector('body');

let ul = document.createElement('ul');

body.appendChild(ul);

let li = document.createElement('li')
ul.appendChild(li)

li.textContent = 'Esto es texto'

for (let i = 0; i <= 30; i++) {
         let item = document.createElement('li')
         li.textContent = `li# ${i}`
     }
     