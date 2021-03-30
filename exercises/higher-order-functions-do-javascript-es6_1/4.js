const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (rightAnswer, studentAnswer, sum) => {
  if (rightAnswer === studentAnswer) {
    sum += 1.0;
  } else {
    sum -= 0.5;
  }
  return sum;
};

const checkAnswers = (rightAnswers, studentAnswers, verifyAnswers) => {
  let sum = 0.0;
  for (let index = 0; index < 10; index += 1) {
    if (studentAnswers[index] !== 'N.A') {
      sum = verifyAnswers(rightAnswers[index], studentAnswers[index], sum);
    }
  }
  return sum;
}

console.log(checkAnswers(rightAnswers, studentAnswers, verifyAnswers));