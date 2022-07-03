let base = parseInt(prompt(`Base`))         
let altura = parseInt(prompt(`Altura`))
// // let area = parseInt(prompt(`Area`))
let area = 0

if (base <= 0 || altura <= 0)
{
        console.log("los datos que proporcionas no son validos")
}
else if (base > 0 && altura > 0){
        area = (base * altura)/2
        console.log("area",area)
        
}
