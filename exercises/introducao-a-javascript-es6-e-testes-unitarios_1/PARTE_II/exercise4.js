/* Função 1: */
const replaceX = (world) => {
  return `Tryber ${world.replace('x', world)} aqui!`
}

console.log(replaceX('Vinicius Rocha'));

/* Função 2: */
let skills = ['Java Script', 'HTML', 'CSS', 'React Native', 'AdonisJS']

const listSkills = (sentence) => {
  skills = skills.sort();
  let skillsString = '';
  for (let skill of skills) {
    skillsString += 
    `
    ${skill}`;
  }
  return `${sentence} Minhas cinco principais habilidades são:
  ${skillsString}`
}

console.log(listSkills(replaceX('Vinicius Rocha')))