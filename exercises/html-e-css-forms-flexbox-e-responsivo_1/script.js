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

buttonSubmit = document.querySelector('[type="submit"]');
console.log(buttonSubmit);
function verifyDay(day) {
  if (day < 0 || day >=31) {
    alert('dia inválido')
  }
}

function verifyMonth(month) {
  if (month < 0 || month >= 12) {
    alert('mês inválido')
  }
}

function verifyYear(year) {
  if (year < 0) {
    alert('ano inválido')
  }
}
function submit(event) {
  event.preventDefault();
  inputInit = document.getElementById('id-inicio');
  date = inputInit.value.split('/');
  console.log(date);
  verifyDay(date[0]);
  verifyMonth(date[1]);
  verifyYear(date[2]);
}

buttonSubmit.addEventListener('click', submit);
inputInit = document.getElementById('id-inicio');
function maskDate(el) {
  date = el.target.value;
  if (el.keyCode !== 8) {
    if (date.length === 2) {
      date = date.split();
      date.splice(1, 0, '/');
      date = date.join('');
      inputInit.value = date;
      /* console.log(date); */
    } else if (date.length === 3) {
      date = date.split();
      date.splice(1, 0, '/');
      date = date.join('');
      inputInit.value = date;
      /* console.log(date); */
    }else if (date.length === 5) {
      date = date.split();
      date.splice(4, 0, '/');
      date = date.join('');
      inputInit.value = date;
      /* console.log(date); */
    }
    date.value = date;
  }
}

function maskDateDown(el) {
  date = el.target.value;
  if (el.keyCode !== 8) {
    if (date.length === 2) {
      date = date.split();
      date.splice(1, 0, '/');
      date = date.join('');
      inputInit.value = date;
      /* console.log(date); */
    }else if (date.length === 5) {
      date = date.split();
      date.splice(4, 0, '/');
      date = date.join('');
      inputInit.value = date;
      /* console.log(date); */
    }
  }
}
inputInit.addEventListener('keyup', maskDate);
inputInit.addEventListener('keydown', maskDateDown)