//El operador lógico and que se escribe && otorga el booleano true cuando ambos sean true

console.log(true && true);

console.log(true && false);

console.log(false && false);

//Un ejemplo en la vida real sería preguntar. ¿Están todas las luces encendidas? Se comprueba cada luz y si todas están encendidas (true), entonces la respuesta es true. Si alguna luz está apagada (false), entonces la respuesta es false.


// El operador lógico or se escibe || y otorga el booleano true si alguna de las condiciones es true

console.log(true || true);

console.log(true || false);

console.log(false || false);

//Un ejemplo en la vida real sería preguntar. ¿Hay alguna luz encendida? Se comprueba cada luz y si alguna está encendida (true), entonces la respuesta es true. Sólo si todas las luces están apagadas (false), entonces la respuesta es false.


// Operador lógico NOT se indica con ! e invierte el valor booleano. Se pone delante del valor que se quiere invertir


console.log(!true);

console.log(!false);

//Un ejemplo en la vida real sería pulsar el interruptor de la luz. Si la luz está encendida (true), entonces pulsando el interruptor la apagamos (false). Si la luz está apagada (false), entonces pulsando el interruptor la encendemos (true).


//Los operadores lógicos y los operadores de comparación se pueden combinar para crear expresiones más complejas. 
//Por ejemplo, podemos preguntar si un número está entre dos valores.

console.log(7 < 8 && 7 > 6);

console.log(10 > 15 && 10 < 11);

//En el primer caso, la expresión se evalúa como true porque 7 < 8 es true y 7 > 6 es true. En el caso siguiente una de las dos expresiones es false, entonces la expresión es false.



// También puedes usar paréntesis para agrupar operaciones y usar operadores lógicos y aritméticos.

console.log((2 + 2) < 3 && (10 < (8 * 2)));// → false

console.log((2 * 3) >= 6 && (4 / 2) <= 2); // true

console.log((4 * 4) > 32 || (5 * 8) < 51); // true


console.log(2 + 2 < 3 && 10 < 8 * 2);
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false

//Comprueba si 7 es mayor que 8 y menor que 10

console.log(7 > 8 && 7 < 10);

// Tenemos un producto en una tienda. Cuesta 1500 y tenemos un descuento del 25%. Tengo 1150€ en mi cartera. 
// Escribe un código que me diga si puedo comprarlo. No uses paréntesis.

console.log(25 / 1500 * 100 <= 1150);


//Dos o más operandos
//Aunque todos los ejemplos que has visto hasta ahora usan dos operandos, los operadores lógicos también pueden usarse con más de dos operandos.

console.log(true && true && true); // → true

console.log(true && true || false); // → true

console.log(!true && !true); // → false

console.log(false && true || !true); // → false



