/* Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro. */

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

  describe(`Teste que verifica se o usuário está ou não na base da dados:`, () => {

  it('User is present in database:', async () => {
    expect.assertions(1);
    await getUserName(4).then((name) => expect(name).toStrictEqual('Mark'));
  });
  it('User is not present in database:', async () => {
    expect.assertions(1);
    await getUserName(1).catch(error => expect(error).toStrictEqual({ error: 'User with ' + 1 + ' not found.' }))
  });
});