/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let menor = numbers[6]  

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < menor) {
        menor = numbers[index]
    }
}

console.log(`O menor número do array é: ${menor}`)

/*Para resolver esse exercício, utilizei esse site:
https://www.clubedohardware.com.br/topic/1231893-como-achar-o-maior-e-menor-valor-em-um-vetor/
*/