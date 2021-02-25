/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let cont = 0
let messege = null

for (let index = 0; index < numbers[index]; index++) {
    if(numbers[index]%2 != 0){
        cont++
    }
}

if (cont == 0) {
    messege = "nenhum valor ímpar encontrado"
}else {
    messege = `Existem ${cont} valores ímpares no array.`
}

console.log(messege)