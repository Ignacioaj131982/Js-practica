/*while (condición) {
    // código a ejecutar mientras se cumpla la condición
}*/

let cuentraAtras = 10;
// iniciamos la variable fuera del bucle

console.log(cuentraAtras); // 9

// mientras la cuenta atrás sea mayor que 0
while (cuentraAtras > 0) {
    // mostramos el valor de la cuenta atrás en cada iteración
    console.log(cuentraAtras + " segundos")
      // restamos 1 a la cuenta atrás
    cuentraAtras = cuentraAtras -1
}

console.log("¡Despegue!");

