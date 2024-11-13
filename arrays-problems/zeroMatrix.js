//zero matrix

function zeroMatrix(matrix) {
    const length = matrix.length
    const rowsIncludesZero = new Array(length)
    const colsIncludesZero = new Array(length)

    //check the rows and cols having zero value
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (matrix[i][j] === 0) {
                rowsIncludesZero[i] = 0;
                colsIncludesZero[j] = 0
            }
        }
    }

    for (let i = 0; i < length; i++) {
        if (rowsIncludesZero[i] === 0) {
            for (let j = 0; j < length; j++) {
                matrix[i][j] = 0
            }
        }
    }

    for (let i = 0; i < length; i++) {
        if (colsIncludesZero[i] === 0) {
            for (let j = 0; j < length; j++) {
                matrix[j][i] = 0
            }
        }
    }
    return matrix
}
const matrix = [
    [1, 0, 1],
    [4, 1, 0],
    [1, 8, 9]
];
console.log(zeroMatrix(matrix))