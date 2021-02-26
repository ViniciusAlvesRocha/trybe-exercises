/*
1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
*/

let n = 5
let line = []
let asterisco = "*"

if (n<=1) {
    console.log("escolha valor maior do que 1!")
}else {
    for (let addAsterisco = 0; addAsterisco < n; addAsterisco++) {
        line = line+asterisco
    }
    
    for (let lines= 1; lines<=n; lines++) {
        console.log(line)
    }
}