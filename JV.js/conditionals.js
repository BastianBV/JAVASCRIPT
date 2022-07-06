//! Conditionals 

// Estructuras de control selectivas


        // // Simples

        // const montoMinimo = 2000;
        // let montoCompra = 2500;
    
        // if(montoCompra >= montoMinimo) {
        //             console.log(`Elegible a MSI`)
        // }


        // // Dobles 

        // const montoMinimo = 2000;
        // let montoCompra = 2500;
    
        // if(montoCompra >= montoMinimo) {
        //             console.log(`Elegible a MSI`)
        // }

        // else{
        //     console.log(`MSI no estan disponibles`)
        // }


        // // Multiples 

        // const montoMinimo = 2000;
        // let montoCompra = 2500;
    
        // if(montoCompra >= montoMinimo) {
        //             console.log(`Elegible a MSI`)
        // }
        // else if(montoCompra >= montoMinimo){
        //             console.log(`Agrega $100 o mas a tu compra y accede a MSI`)
        // }

        // else{
        //             console.log(`MSI no estan disponibles`)
        // }




        // Anidacion o nesting de condicionales ----> //!No es buena practica anidar mucho 


        // const num = parseInt(prompt(`Ingresa un numero a evaluar`))

        // if (num == 0)   {
        //     // Codigo
        //     if (num == 0){
        //         console.log(`El numero ingresado es 0`)    
        // }
        // else {
        //     console.log(`El numero es positivo`)
        // }
        // }
        // else {
        //     console.log(`Ek numero es negativo`)
        // }

        
        let valor1 = parseInt(prompt(`Porfavor da un valor`))
        let valor2 = parseInt(prompt(`Porfavor da un valor`))
        let valor3 = parseInt(prompt(`Porfavor da un valor`))

        if (valor1 > valor2 && valor1 > valor3){

            console.log("El valor número 1 es mayor")
        }
        if (valor2 > valor1 && valor2 > valor3){

            console.log("El valor número 2 es mayor")
        }
        if (valor3 > valor1 && valor3 > valor2){

            console.log("El valor número 3 es mayor")
        }