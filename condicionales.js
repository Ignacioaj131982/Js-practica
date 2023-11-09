/* if (condición) {
    // código que se ejecuta si la condición es verdadera
    // entre llaves si la condicion es true
}*/

let edad = 18;

if (edad >= 18) {
    console.log("Soy mayor de Edad");
}

let otraEdad = 17;

if (otraEdad >= 18) {
    console.log("Soy mayor de Edad");
}

let otraEdad2 = 15;

if (otraEdad2 >= 18) {
    console.log("Soy mayor de Edad");

} else {
    console.log("Soy menor de Edad");
}

let otraEdad3 = 16;

if (otraEdad3 >= 18) {
    console.log("Soy Mayor de Edad");
}
else if (otraEdad3 >= 16) {
    console.log("Casi Mayor de Edad");
}

else {
    console.log("Soy Menor de Edad");
}

// Anidación de condicionales

let otraEdad4 = 18;

let tieneCarne = true;

if (otraEdad4 >=18) {
    if (tieneCarne) {
    console.log("Puede Conducir");
} else {
    console.log("No Puede Conducir");
} 
} else {
    console.log("No puede conducir");
}

const otraEdad5 = 18

const tieneCarne2 = false;

if (otraEdad5 && tieneCarne2) {
    console.log("Puede Conducir");
} else {
    console.log("No puede Conducir");
}

const otraEdad6 = 17;

const tieneCarne3 = true;

const puedeConducir = otraEdad6 >= 18 && tieneCarne3;

if (puedeConducir) {
    console.log("Puede Conducir");
} else {
    console.log("No puede Conducir");
}