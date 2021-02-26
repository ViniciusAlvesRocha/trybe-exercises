/*
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
*/

let n = 5
let line = ""
let asterisco = "*"

if (n<=1) {
    console.log("escolha valor maior do que 1!")
}else {
    
    for (let lineC = 1; lineC<=n; lineC++) {
        for (let addAsterisco = 1; addAsterisco <= lineC; addAsterisco++) {
            line = line+asterisco
            
        }
        console.log(line)
        line = ""
    }
}