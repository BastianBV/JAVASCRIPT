
//! Crear una Tabla tipo excel


// <table>
//     <thead>
//         <th>

//         </th>
//     </thead>
//     <tbody>
//         <tr>
//             <td></td>
//         </tr>
//     </tbody>
// </table>

// let koders = [
//  {
//     name: 'Ferdinand',
//     lastName: 'Bracho',
//     age: 30,
//     generation: 2, 
//     module: ['js','pynton', 'git'],
//  },
//  {
//     name: 'Alfredo',
//     lastName: 'Pi',
//     age: 20,
//     generation: 10, 
//     module: ['Node','Cloud'],
//  },
//  {
//     name: 'Ale',
//     lastName: 'Pa',
//     age: 30,
//     generation: 1, 
//     module: ['React'],
//  },
// ];

//? Creating Initial elements

// let table = document.createElement('table');
// let tHead = document.createElement('thead');
// table.appendChild(tHead);

// let thName = document.createElement('th');
// thName.textContent = 'Nombre';

// let thLastName = document.createElement('th');
// thLastName.textContent = 'Apellido'

// let thAge = document.createElement('th');
// thAge.textContent = 'age';

// let thGeneration = document.createElement('th');
// thGeneration.textContent = ' Generacion';

// let thModule = document.createElement('th');
// thModule.textContent = 'Modulo';


//  tHead.appendChild(thName);
//  tHead.appendChild(thLastName);
//  tHead.appendChild(thAge);
//  tHead.appendChild(thGeneration);
//  tHead.appendChild(thModule);

//  console.log(tHead);

//  document.querySelector('body').appendChild(table);
 
//  let tBody = document.createElement('tBody');
//  table.appendChild(tBody);

//  console.log(table);


//  //? Creating and setting table body elements 

//  koders.forEach((koder)=> {
//     let tRow = document.createElement('tr');

//     let tdName = document.createElement('td');

//     let tdLastName = document.createElement('td');
    
//     let tdAge = document.createElement('td');

//     let tdGeneration = document.createElement('td');

//     let tdModule = document.createElement('td');

//     tdName.textContent = koder['name'];

//     tdLastName.textContent = koder['LastName'];

//     tdAge.textContent = koder['Age'];

//     tdGeneration.textContent = koder['Generation'];

//     tdModule.textContent = koder['Module'];

//     tRow.appendChild(tdName);
//     tRow.appendChild(tdLastName);
//     tRow.appendChild(tdAge);
//     tRow.appendChild(tdGeneration);
//     tRow.appendChild(tdModule);

//     console.log(tRow);

//     tBody.appendChild(tRow);
//  })




//todo -- Otras propiedades de los elementos DOM 
//~ textContent = insertar texto
//~ innerText = insertar texto igual tipo HTML
//~ innerHTML = insertar texto que se interpreta como HTML  
                        //! Reconoce Sintaxis de HTML (<p> <li> <ul>)


//^lista.innerHTML += `<li class ="items">${texto}</li>



//todo --- classList 
//* es una propiedad que tiene multiple metodos en los NODOS 

let lista = document.querySelector('ul');
console.log(lista)

//? Agregamos una o mas clases (respetando las ya presentes)
lista.classList.add('otra','otramas');

//? Elimina una class especifica 
lista.classList.remove('otramas')


//? Nos da un string con las clases 
console.log(lista.classList.value)

//? Nos construye un iterable -> for of 
let itemClass = lista.classList.values

console.log(itemClass)

for(x of itemClass){

    console.log(x)
}

//? Length
console.log(lista.classList.length)


//todo Construir un album de card 

