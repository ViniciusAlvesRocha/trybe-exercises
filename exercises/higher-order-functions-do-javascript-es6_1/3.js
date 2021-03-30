// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const checharResposta = (correctAnswer) => (userAnswer) => correctAnswer.toLowerCase()===userAnswer.toLowerCase() ? true : false;

console.log(checharResposta(correctAnswer)(userAnswer));