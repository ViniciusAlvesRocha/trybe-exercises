/* Fonte: https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = (a, b) => {
  return (a - b);
}

console.log(`Os números ${oddsAndEvens.sort(sortArray)} se encontram ordenados de forma crescente!`);