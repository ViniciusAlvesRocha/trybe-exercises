/*
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
*/

word = 'arara'
console.log(verificaPalindrome(word))

function verificaPalindrome(word){
    let wordFor = ""
    for (let i = word.length-1; i>=0; i--) {

        wordFor += word[i]

    }
    
    if (wordFor===word) {

        return true

    } else {

        return false
    }
}