const { expect } = require("@jest/globals");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

describe(`2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.`, () => {
  expect.assertions(2);
  it('User is present in database', () => {
    return getUserName(4).then((name) => expect(name).toStrictEqual('Mark'));
  });
  it ('User is not present in database:', () => {
    return getUserName(1).catch(error => expect(error).toStrictEqual({ error: 'User with ' + 1 + ' not found.' }))
  });
});