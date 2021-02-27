/*
4- Depois, faça uma pirâmide com n asteriscos de base
*/

let n = 5
let espacos = ""
let asteriscos = ""
let cont = 0

for (let i=1; i<=n-2; i++) {
    for (let ie=1; ie<=(n-i-1); ie++) {
        espacos+=" "
    }
    for (let ia=1; ia<=(1+cont); ia++) {
        asteriscos+="*"
        
    }
    cont+=2
    console.log(espacos+asteriscos)
    espacos = ""
    asteriscos = ""
}