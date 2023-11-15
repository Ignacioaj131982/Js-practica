/*Como ya observaron esta semana cerramos con los contenidos que veremos en esta materia:
variables, tipos de datos, condicionales y bucles, que son herramientas esenciales para cualquier tipo de 
lenguaje de programación, pero para poder realizar un correcto uso de éstas necesitamos ejercitar nuestro
pensamiento computacional, entonces vamos a hacerlo resolviendo los siguientes enunciados de la forma que creamos más
conveniente.*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

/*Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.*/


const menoresDeEdad = [];

for (let i = 0; i < edades.length; i++){
    if (edades[i] <18 ){
        menoresDeEdad.push(edades[i]);
    }
}

console.log(menoresDeEdad);


const mayoresEdad = [];
for (let i = 0; i < edades.length; ++i) {
    if(edades[i] >= 18){
        mayoresEdad.push(edades[i]);
    }

}

console.log(mayoresEdad);


const edadesIgualDieciocho = []

for (let i = 0; i <edades.length; i++) {
    if (edades[i] === 18){
        edadesIgualDieciocho.push(edades[i])

    }
}

console.log(edadesIgualDieciocho);

const menorNumero = (array) => {
    let menorNumero = array[0]
    for (let i = 0; i< array.length; i ++){
        if (menorNumero > array[i]) {
            menorNumero = array[i]
        }
    }
    return menorNumero
}

const resultado = menorNumero(edades)
console.log(resultado);

const mayorNumero = (array)=>{
    let mayorNumero = array[0]
    for (let i = 0; i < array.length; i++) {
        if (mayorNumero < array[i]) {
            mayorNumero = array[i]
        }
    }
    return mayorNumero

}

const resultado2 = mayorNumero(edades)
console.log(resultado2);


const calcularPromedio = (array) => {
    let acc = 0
    for (let i = 0; i < array.length; i ++) {
        (acc += array[i]) / array[i]
    }
    return acc/ array.length;
}

let resultado3 = calcularPromedio(edades)
console.log(resultado3);

const Incrementar = (array)=>{
    let acc = []
    for (let i= 0; i < array.length; ++ i) {
        acc.push(array[i] + 1);
    }
    return acc
}

let resultado4 = Incrementar(edades)
console.log(resultado4);



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

/*Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un array con las cuentas habilitadas.
Obtener un array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.*/

const menoresDe30 = (array) => {
    let acc = []
    for (let i= 0; i < array.length; i ++) {
        if (array[i].edadTitular < 30) {
            acc.push(array[i]);
        }
    }

    return acc

}

/*let resultado5 = menoresDe30(arrayCuentas)
console.log(resultado5);*/

const mayorIgualA30 = (array) => {
    let acc = []
    for (let i = 0; i < array.length; i ++) {
        if (array[i].edadTitular >= 30) {
            acc.push(array[i])
        }
    }
    return acc
}

/*let resultado6 = mayorIgualA30(arrayCuentas)
console.log(resultado6);*/

const cuentaMasJoven = (array) => {
    let acc = array[0]
    for (let i = 0; i < array.length; i ++) {
        if (array[i].edadTitular < acc.edadTitular) {
            acc = array[i];
        }
    }
    return acc;
}

/*let resultado7 = cuentaMasJoven(arrayCuentas)
console.log(resultado7);*/

const cuentasHabilitadas = (array) => {
    let acc = []
    for (let i = 0; i < array.length; i ++) {
        if(array[i].estaHabilitada) {
            acc.push(array[i]);

        }
    }
    return acc
}

/*let resultado8 = cuentasHabilitadas(arrayCuentas)
console.log(resultado8);*/

const cuentasDeshabilitadas = (array) => {
    let acc = []
    for (let i = 0; i < array.length; i ++) {
        if (array[i].estaHabilitada !== true) {

            acc.push(array[i]);
        }

    }
    return acc
}

/*let resultado9 = cuentasDeshabilitadas(arrayCuentas)
console.log(resultado9);*/

const menorSaldo = (array) => {
    let acc = array[0]
    for (let i = 0; i < array.length; i ++) {
        if (array[i].saldo < acc.saldo ) {
            acc = array[i]
        }
    }
    return acc
}

let resultado10 = menorSaldo (arrayCuentas)
console.log(resultado10);

const mayorSaldo = (array) => {
    let acc = array[0]
    for (let i = 0; i < array.length; i ++) {
        if (array[i].saldo > acc.saldo) {
            acc = array[i]
        }
    }
    return acc
}

let resultado11 = mayorSaldo(arrayCuentas)
console.log(resultado11);


const generarId = (array) => {
let acc = []
let contador = 1;
for (let i = 0; i < array.length; i ++) {
    array[i].id = contador;
    acc.push(array[i]);
    contador++;

}
return acc
}

let resultado12 = generarId(arrayCuentas)
console.log(resultado12);

const buscarPorId = (array, id) =>{
    for (let i = 0; i < array.length; i ++) {
        if (array[i].id === id) {
            return array[i]

        } 
    }
    return null
}

console.log(buscarPorId(arrayCuentas, 6));

