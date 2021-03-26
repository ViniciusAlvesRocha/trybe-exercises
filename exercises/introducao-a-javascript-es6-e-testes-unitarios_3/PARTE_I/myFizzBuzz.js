const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
//4.1:
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Deveria retornar fizzbuzz!');

//4.2:
assert.strictEqual(myFizzBuzz(3), 'fizz', 'Deveria retornar o resultado fizz');

//4.3:
assert.strictEqual(myFizzBuzz(5), 'buzz', 'Deveria retornar o resultado buzz');

//4.4:
assert.strictEqual(myFizzBuzz(7), 7, 'Deveria retornar o próprio valor de entrada');

//4.5:
assert.strictEqual(myFizzBuzz('ola mundo'), false, 'Deveria retornar false');

