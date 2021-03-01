

function maior(array) {
    let maior = 0
    let maiorIndex = 0

    for (let index in array) {
        if (array[index] > maior) {
            maiorIndex = index
            maior = array[index]
        }
    }

    return maiorIndex
}

let array = [2, 3, 20, 7, 10, 11]

console.log(maior(array))