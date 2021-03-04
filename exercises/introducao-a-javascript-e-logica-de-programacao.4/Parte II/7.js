/*
7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
*/

function verificaFimPalavra(word, ending) {
  let cont = 0
  let contEnd = 0
  for (let i = ending.length-1; i>=0; i--) {
      if (word[(word.length-1)-cont++] == ending[i]) {
        contEnd++
      }
  }
  if (contEnd == ending.length) {
    return true
  } else {
    return false
  }
}

word = "trybe"
ending = "be"
console.log(verificaFimPalavra(word, ending))