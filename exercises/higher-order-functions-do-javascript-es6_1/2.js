/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: Tente novamente ou Parabéns você ganhou). */

const verifySortition = (number, numberSortition) => number===numberSortition

const getResultSortition = (number, action) => {
  let messege = null;
  numberSortition = Math.ceil(Math.random() * 5);
  if (action(number, numberSortition))
  messege = 'Parabéns você ganhou';
  else
  messege = 'Tente novamente';

  return messege;
}

console.log(getResultSortition(3, verifySortition));