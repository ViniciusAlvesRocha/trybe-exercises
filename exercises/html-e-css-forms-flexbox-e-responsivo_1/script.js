window.onload = function() {
  states = ['Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo', 
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais', 
  'Pará',
  'Paraíba',
  'Parabá',
  'Pernanbuco'];  
  
  statesComboBox = document.getElementById('idestado');
  
  for (let index = 0; index < states.length; index +=1) {
  
  option = document.createElement('option');
  option.innerText = states[index];
  statesComboBox.appendChild(option);
  }
}