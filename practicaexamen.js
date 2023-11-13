/*Como ya observaron esta semana cerramos con los contenidos que veremos en esta materia:
variables, tipos de datos, condicionales y bucles, que son herramientas esenciales para cualquier tipo de 
lenguaje de programación, pero para poder realizar un correcto uso de éstas necesitamos ejercitar nuestro
pensamiento computacional, entonces vamos a hacerlo resolviendo los siguientes enunciados de la forma que creamos más
conveniente.*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


const menoresEdad =[];

for (let i = 0; i < edades.length; i++){
if (edades[i] < 18){
        menoresEdad.push(edades[i]);

}
}
console.log(menoresEdad)

const mayoresDeEdad =[];

for (let i = 0; i < edades.length; i++){
if (edades[i] >= 18){
        mayoresDeEdad.push(edades[i]);

}
}
console.log(mayoresDeEdad);

const edadIgualdieciocho = [];

for (let i = 0; i < edades.length; i++){
    if (edades[i] === 18){
            edadIgualdieciocho.push(edades[i]);
    
    }
    }

    console.log(edadIgualdieciocho);


const menor = (array) => {
    let menor = array[0]
    for (let i = 0; i < array.length; i ++) {
        if (menor > array[i]) {
            menor = array[i]

        }
    }
    return menor
}

let resultado = menor(edades)
console.log(resultado);

const mayor = (array) => {
    let mayor = array[0]
    for (let i = 0; i < array.length; i ++) {
        if (mayor < array[i]) {
            mayor = array[i]

        }
    }
    return mayor
}

let resultado2 = mayor(edades)
console.log(resultado2);

const promedioEdades = (arreglo) => {
    let acc = 0
    for (let i= 0; i < arreglo.length; i ++) {
        acc += arreglo[i] / arreglo.length
    }

    return acc
}

let resultado3 = promedioEdades(edades)
console.log(resultado3);
