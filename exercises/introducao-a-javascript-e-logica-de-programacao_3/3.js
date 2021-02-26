/*
3- Agora inverta o lado do triângulo:
*/

let n = 5
let line = ""
let asterisco = "*"
let espacoBranco = " "
let qtdAsterisco = 0

if (n<=1) {
    console.log("escolha valor maior do que 1!")
}else {
    
    for (let lineC = 1; lineC <= n; lineC++) {
        qtdAsterisco++
        for(let brancoC = 1; brancoC <= n-qtdAsterisco; brancoC++) {
            line+=espacoBranco
        }
        for(let addAsterisco = 1; addAsterisco <= lineC; addAsterisco++) {
            line+=asterisco
        }
        console.log(line)
        line = ""
    }
}