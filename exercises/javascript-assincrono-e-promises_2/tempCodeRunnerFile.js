const promise = new Promise((resolve, reject) => {
  let number = Math.pow(Math.round(Math.random()* 50), 2);
  let sum = 0;
  const numbersArray = [];
  for (let index = 0; index < 10; index ++) {
    numbersArray.push(number);
  }
  sum = numbersArray.reduce((accumulator, currentValue) => accumulator+currentValue);
  if (sum < 8000){
    return resolve(number);
  }
  reject(number);
})
.then(() => {
  console.log(dividedBy(sum));
  return console.log('Promise resolvida')
})
.catch(() => console.log('Promise rejeitada'));

const dividedBy = (sum) => {
  const dividedByNumbers = [2, 3, 5, 10];
  return dividedByNumbers.map((dividedNumber) => sum/dividedNumber);
}