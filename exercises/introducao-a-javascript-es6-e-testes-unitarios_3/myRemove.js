const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
//2.1:
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O valor do array retornado deveria ser [1, 2, 4]');

//2.2:
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O array retornado não deveria ser esse');

//2.3:

//2.4:
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O array de entrada deveria fazer parte do array de saída');