/*
Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
*/

function somatorio(n) {

    sum = 0
    for (let cont = 1; cont <= n; cont++) {
        sum += cont
    }

    return sum

}
let n = 5
console.log(somatorio(n))