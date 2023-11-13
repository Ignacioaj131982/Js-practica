const frutas = ["manzana", "pera", "banana", "anana", "kiwi"]

console.log(frutas.length); //devuelve 5 que es la cantidad de elementos que existen en el array

frutas.length = 2; //corta la cantidad de elementos a 2

console.log(frutas); //veremos solo manzana y pera porque en la linea 5 cortamos los elementos a los primeros 2

//Los métodos son funciones que se ejecutan sobre un objeto

const frutas2 = ["manzana", "pera", "plátano", "fresa"]

frutas2.push("melocoton") 

console.log(frutas2); // añade el melocoton a lo último del array

frutas2.pop() // saca el último elemento del array y lo devuelve

// tanto push como pop agregan y sacan y modifican el array

console.log(frutas2); // devuelve la longitud del array en 4

frutas2.shift(); // elimina el primer elemento del array y lo devuelve

console.log(frutas2); // devuelve la longitud del array en 3

frutas2.unshift("fresa");

console.log(frutas2); // devuelve en el array como primer elemento la fresa

frutas2.unshift("mango", "durazno")

console.log(frutas2); // agrega al array al principio dos elementos mas mango y durazno

//Concatenación

const numbers = [1, 2, 3, 4]

const numbers2 = [5, 6, 7, 8, 9]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers); // muestra los dos array concatenados

// Spread Operatior

const allNumbersSpread = [...numbers, ...numbers2]

console.log(allNumbersSpread); // muestra los dos array juntos



/*function procesarPedido(pedidos) {
    
const platos = ["Carlos", "camote", "quinoto"]
platos.shift();
platos.unshift("bebida");
platos.push("Carlos")
    return platos
}

const pedidos = ["pedido1", "pedido2", "pedido3"];

const resultado6 = procesarPedido(pedidos)
console.log(resultado6);*/

/*function procesarPedido(pedido) {
    // Extraer el nombre del cliente (primer elemento del array)
    const nombreCliente = pedido.shift();

    // Añadir "bebida" al principio del array
    pedido.unshift("bebida");

    // Añadir el nombre del cliente al final del array
    pedido.push(nombreCliente);

    // Devolver el array modificado
    return pedido;
}

  // Ejemplo de uso
const pedidoEjemplo = ["Cliente1", "Plato1", "Plato2", "Plato3"];
const resultadoPedido = procesarPedido(pedidoEjemplo);
console.log(resultadoPedido);*/

function procesarPedido(pedidos) {
    const nombreCliente = pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push("a")
    
    return pedidos
}