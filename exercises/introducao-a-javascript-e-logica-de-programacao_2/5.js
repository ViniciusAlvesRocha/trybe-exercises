/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let maior = 0

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maior) {
        maior = numbers[index]
    }
}

console.log(`O maior número do array é: ${maior}`)

/*Para resolver esse exercício, utilizei esse site:
https://www.clubedohardware.com.br/topic/1231893-como-achar-o-maior-e-menor-valor-em-um-vetor/
*/