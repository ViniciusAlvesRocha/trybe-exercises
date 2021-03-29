/* Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const getFullNameEmail = (fullName) => {
  return {fullName, email: `${fullName.replace(' ','').toLowerCase()}@trybe.com`};
}

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'),
    id2: action('Luiza Drumond'),
    id3: action('Carla Paiva')
  }
  return employees;
};

console.log(newEmployees(getFullNameEmail));