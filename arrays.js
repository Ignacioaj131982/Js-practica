const array = ["Hola", "soy", "Nacho"]
console.log (array[1]); //devuelve soy porque las posiciones del array empiezan con 0

array[2] = "Pepe"

 console.log(array[2]); //devuelve Pepe porque en la linea 4 utilizamos el método para cambiar el dato

//Se puede usar variables para acceder a los elementos del array

let index = 1

console.log(array[index]); // devuelve soy porque la variable index indica la posicion 1

//1.	A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


/*a.	Obtener en un nuevo array las edades menores a 18.
b.	Obtener en un nuevo array las edades mayor o igual a 18.
c.	Obtener en un nuevo array las edades igual a 18.
d.	Obtener el menor.
e.	Obtener el mayor. 
f.	Obtener el promedio de edades.
g.	Incrementar en 1 todas las edades.*/

let menosDieciocho = (array) => {
let nuevoArray = []
for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
        nuevoArray.push(array[i]);
    }
    
}
return nuevoArray
}

let resultado = menosDieciocho(edades)
console.log(resultado);



let mayorDieciocho = (array) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 18) {
            nuevoArray.push(array[i]);
        }
        
    }
    return nuevoArray
    }
    
    let resultado1 = mayorDieciocho(edades)
    console.log(resultado1);

    let elMenor = (array) => {
        let menor = array[0];
        
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor) {
                menor = array[i];
            }
            
        }
        return menor
        }
        
        let resultado2 = elMenor(edades)
        console.log(resultado2);
        

        let elMayor = (array) => {
            let mayor = array[0];
            
            for (let i = 0; i < array.length; i++) {
                if (array[i] > mayor) {
                    mayor = array[i];
                }
                
            }
            return mayor
            }
            
            let resultado3 = elMayor(edades)
            console.log(resultado3);
    
            

    let promedioEdades = (array) =>{

        let suma = 0;

        for (let i = 0; i < array.length; i++) {
            suma += array[i];
            
        }
        return suma/array.length

    }
    
    
    let resultado4 = promedioEdades(edades)
    console.log(resultado4);

    let incrementarEnUnoEdades = (array) => {

        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] + 1;
            
        }
    }

    
    incrementarEnUnoEdades(edades);
    console.log(edades);

    const arrayCuentas =
[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
]

/*a.Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
b.	Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
c.	Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
d.	Obtener la cuenta con el titular de la misma más joven.
e.	Obtener un array con las cuentas habilitadas.
f.	Obtener un array con las cuentas deshabilitadas.
g.	Obtener la cuenta con el menor saldo.
h.	Obtener la cuenta con el mayor saldo.*/

let arrayMenores30 = (array) => {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < 30) {
            nuevoArray.push(array[i])
            
        }  
        
    }

    return nuevoArray


}

let resultado5 = arrayMenores30(arrayCuentas)
console.log(resultado5);

let arrayMayores30 = (array) => {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular >= 30) {
            nuevoArray.push(array[i])
            
        }  
        
    }

    return nuevoArray


}

let resultado6 = arrayMayores30(arrayCuentas)
console.log(resultado6);

let arrayMenorIgual30 = (array) => {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular <= 30) {
            nuevoArray.push(array[i])
            
        }  
        
    }

    return nuevoArray


}

let resultado7 = arrayMenorIgual30(arrayCuentas)
console.log(resultado7);



let cuentaMasJoven = (array) => {
    let masJoven = array[0];
for (let i = 0; i < array.length; i++) {
if (array[i].edadTitular < masJoven.edadTitular) {
    masJoven = array[i]


    
    
}
    
}
return masJoven;
}

let resultado8 = cuentaMasJoven(arrayCuentas)
console.log(resultado8);

let cuentasHabilitadas = (array) => {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada) {
            nuevoArray.push(array[i]);    
        }
        
        
    }
    return nuevoArray
}

let resultado9 = cuentasHabilitadas(arrayCuentas)
console.log(resultado9);


let cuentasDeshabilitadas = (array)=> {
let nuevoArray = [];
for (let i = 0; i < array.length; i++) {
    if ( !array[i].estaHabilitada) {
        nuevoArray.push(array[i]);
    }
    
}
return nuevoArray

}

let resultado10 = cuentasDeshabilitadas(arrayCuentas)
console.log(resultado10);


let cuentaMenorSaldo = (array)=> {

    let menorSaldo = array[0];
    for (let i = 0; i < array.length; i++) {
        if ( array[i].saldo < menorSaldo.saldo) {
        menorSaldo = array[i];
        
        }
        
    }
    return menorSaldo
}

let resultado11 = cuentaMenorSaldo(arrayCuentas)
console.log(resultado11);


let mayorSaldo = (array) => {
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo > mayor.saldo) {
            mayor = array[i];
            
        }
        
    }
    return mayor
}

let resultado12 = mayorSaldo(arrayCuentas)
console.log(resultado12);


/*
Extras:
1.	Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

2.	Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null

3.	Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

4.	Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
a.	Reutilizando la función  buscarPorId 
*/

let generarID = (array) => {
    let id = 1;
for (let i = 0; i < array.length; i++) {
    
    array[i].id = id;
    id++;
    
}
}

generarID(arrayCuentas)
console.log(arrayCuentas);


let buscarPorId = (array, ident) =>{
    
    for (let i = 0; i < array.length; i++) {
            if (array[i].id === ident) {
            
            return array[i];
        } 
        
    }
return null;
}

let resultado13 = buscarPorId(arrayCuentas, 8)
console.log(resultado13);


let filtrarPorSaldos = (array, saldo) => {
    let nuevoArray = []
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo <= saldo) {
            
            nuevoArray.push(array[i])
            
        }
        
        
    }
    return nuevoArray

}

let resultado14 = filtrarPorSaldos(arrayCuentas, 1650)
console.log(resultado14);


let incrementarSaldo = (array, ident, saldoIncremento) => {
    let cuentaEncontrada = buscarPorId(array, ident);

    
        if (cuentaEncontrada) {
        cuentaEncontrada.saldo += saldoIncremento;
        }
    
        
        return cuentaEncontrada
    }
    


let resultado15 = incrementarSaldo(arrayCuentas, 3, 264000)
console.log(resultado15);



