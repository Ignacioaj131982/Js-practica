let arr=[
    [1,2,3,4,5],
    [9,8,7,6,5],
    [8,5,4,2,3],
    [5,6,8,4,2],
    [6,5,2,1,4]]

    const suma = (mat) => {
        let acc = 0;
        for (let i = 0;  i < mat.length; i ++) {
            for (let j =0; j < mat[i].length; j ++) {
                acc += mat[i][j]

            }
            
        }
        return acc

    }

    let resultado = suma(arr)
    console.log(resultado);

    function generateRandomMatrix(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(Math.floor(Math.random() * 10));
            }
            matrix.push(row);
        }
        return matrix;
    }
    
    
    function generarMatriz10x10() {
        let matriz = [];
        let contador = 1;
        for (let i = 0; i < 10; i++) {
            let fila = [];
            for (let j = 0; j < 10; j++) {
                fila.push(contador++);
            }
            matriz.push(fila);
        }
        return matriz;
    }

    let resultado2 =generarMatriz10x10()
    console.table(resultado2);

    const sumarDiagonal = (mat) => {
        let acc = 0;
        for (let i = 0; i < mat.length; i ++) {
            acc += mat[i] [i] 
        }
        return acc
    }

    let resultado3 = sumarDiagonal(resultado2)
    console.log(resultado3);

    const sumarDiagonalSecundaria = (mat) => {
        let acc = 0;
        for (let i = 0; i < mat.length; i ++) {
            acc += mat[i] [(mat.length - 1) -i] 
        }
        return acc
    }

    let resultado4 = sumarDiagonalSecundaria(resultado2)
    console.log(resultado4);