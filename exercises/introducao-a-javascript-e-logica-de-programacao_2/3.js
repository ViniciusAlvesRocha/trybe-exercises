/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sun = 0
let media = 0

for(let index = 0; index < numbers.length; index++){
    sun+=numbers[index]
}

media = sun/numbers.length

console.log(media)