const assert = require('assert');

const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
      greeting.push(`Hello ${people[person]}`);
    }
    return greeting;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  //Para verifiicar que a função existe:
  assert.strictEqual(typeof greetPeople, 'function');
  
  //Execução de teste para para verificar se o retorna esta correto:
  assert.deepStrictEqual(greetPeople(parameter), result, `Esperava o seguinte retorno: ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa']`);