let saludar = ()=> {
    console.log("Hola Nacho");
}



let resultado = saludar()
console.log(resultado);

let sumar = ()=> {
    return 1 + 1
}

const resultado1 = sumar()
console.log(resultado1); 


let saludamos = (usuario)=> {
console.log(`Hola + ${usuario}`);
}

let resultado2 = saludamos("Camote")
console.log(resultado);

let suma = (a, b)=> {
return a + b
}

let resultado3 = suma(3, 5)
console.log(resultado3);



// Hecho por mi
const medicionFuerza = (peso, repeticiones) => {
    let mensaje = '';

    if (peso >= 50) {
        mensaje += "Estas levantando buen peso y ";
    } else if (peso >= 35) {
        mensaje += "Podes levantar un poquitito mas y ";
    } else if (peso >= 12) {
        mensaje += "Tenes que levantar mas peso y  ";
    } else {
        mensaje = "Ponete las pilas con el peso y ";
    }

    if (repeticiones >= 12) {
        mensaje += "estas haciendo una buena cantidad de repeticiones";
    } else if (repeticiones >= 10) {
        mensaje += "tenes que hacer mas repeticiones. ";
    } else {
        mensaje += "ponete las pilas con las repeticiones"
    }

    

    return mensaje;
};

const resultado4 = medicionFuerza(50, 8);
console.log(resultado4);

function recursive(n) {
    if (n === 0) {
    return 0
    } else {
    return n + recursive(n - 1)
    }
}

const resultado5 = recursive(3);
console.log(resultado5);

