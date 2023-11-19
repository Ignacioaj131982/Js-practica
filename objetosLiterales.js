const arrayCuentas =
[
    {
    cuenta: 1,
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.40,
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    cuenta: 2,
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    cuenta: 3,
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    cuenta: 4,
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    cuenta: 5,
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    cuenta: 6,
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
]

const banco = {
    clientes : [
        {
        cuenta: 1,
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
        },
        {
        cuenta: 2,
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
        },
        {
        cuenta: 3,
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
        },
        {
        cuenta: 4,
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
        },
        {
        cuenta: 5,
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
        },
        {
        cuenta: 6,
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
        }
    ],

    consultarCliente: function (nombreTitular) {
        for (let i = 0; i < this.clientes.length; ++ i) {
            if (this.clientes[i].titular === nombreTitular) {
                return this.clientes[i];
            } 
            
            
        }
        return "Cliente no encontrado"
    
    },

    deposito: function (titularCuenta, dineroDepositar) {
        for (let i = 0; i < this.clientes.length; ++i) {
            if (this.clientes[i].titular === titularCuenta && this.clientes[i].saldo >= 0) {
                this.clientes[i].saldo += dineroDepositar;
                return `Depósito realizado, su nuevo saldo es: ${this.clientes[i].saldo}.`;
            }
        }
    },

    extraccion: function (titularCuenta, montoExtraer) {
        for (let i = 0; i < this.clientes.length; i ++) {
            if ( this.clientes[i].titular === titularCuenta && this.clientes[i].saldo >= montoExtraer) {
                this.clientes[i].saldo -= montoExtraer;
                return `“Extracción realizada correctamente, su nuevo saldo es: ${this.clientes[i].saldo}.`;
            }
            else if (this.clientes[i].titular === titularCuenta && this.clientes[i].saldo <= montoExtraer) {
                return `Fondos insuficientes.`;
            }
        }
    }

};




//let clienteEncontrado = banco.consultarCliente("Harding Mitchell")
//console.log(clienteEncontrado);

//let depositoRealizado = banco.deposito("Harding Mitchell", 20000)
//console.log(depositoRealizado);

//let extraccionRealizada = banco.extraccion("Harding Mitchell", 20000)
//console.log(extraccionRealizada);

let arrayObjetos = [ 
    { 
    nombre: "Lean", 
    edad: 27 }, 
    { 
    nombre: "Eze", 
    edad: 49},
    {
    nombre: "Javier",
    edad: 50}
]

const propiedadUnica = (arrayObjetos, string) => {
    let acc = []
    for (let i = 0; i < arrayObjetos.length; ++ i) {
        if (string === 'edad' && arrayObjetos[i].edad) {
            acc.push(arrayObjetos[i].edad) 
        }
        else if (string === 'nombre' && arrayObjetos[i].nombre) {
            acc.push(arrayObjetos[i].nombre)
        } else {
            
        }
    }
    if (acc.length === 0) {
        return "propiedad no encontrada";
    }
    return acc;


};

let resultado = propiedadUnica(arrayObjetos, 'edad');
console.log(resultado);


