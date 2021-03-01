/*
3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
*/

function menor(array) {
    let menor = array[0]
    let menorIndex = 0

    for (let index in array) {
        if (array[index] < menor) {
            menorIndex = index
            menor = array[index]
        }
    }

    return menorIndex
}

let array = [2, 4, -6, 7, -100, 0, -3]

console.log(menor(array))