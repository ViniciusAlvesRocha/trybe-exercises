let number = 4;

const getFactorial = (number) => {
  let factorial = 1;
  for (let iterate = 1; iterate <= number; iterate += 1) {
    factorial *= iterate;
  }
  return factorial;
}

console.log(getFactorial(number));