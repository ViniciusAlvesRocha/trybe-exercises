/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
4.Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sun = 0
let media = 0
let messege = null

for(let index = 0; index < numbers.length; index++) {
    sun+=numbers[index]
}

media = sun/numbers.length

if(media > 20.0) {
    messege = "valor maior que 20"
}else {
    messege = "valor menor ou igual a 20"
}

console.log(messege)