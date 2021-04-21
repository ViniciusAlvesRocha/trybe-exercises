const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', () => {
  it('teste 1:',async () => {
    expect.assertions(1);
    await uppercase('vinicius', (word) => {
      expect('VINICIUS').toStrictEqual(word);
    });
  });
});