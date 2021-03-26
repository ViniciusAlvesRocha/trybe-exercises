const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//3.1:
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));
assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'O array esperado era [1, 2, 4]');