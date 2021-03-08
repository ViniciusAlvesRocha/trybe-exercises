function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercício 1:
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  ulDays = document.getElementById('days');
  console.log(ulDays);

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let liDay = document.createElement('li');
    liDay.setAttribute('class', 'day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
        liDay.setAttribute('class', 'day holiday')
    }else if (dezDaysList[i] === 25) {
        liDay.setAttribute('class', 'day holiday friday');
    }else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
        liDay.setAttribute('class', 'day friday')
    }
    liDay.innerText = dezDaysList[i];
    ulDays.appendChild(liDay)
  }

  //Exercício 2:
  function Holiday(buttonHolidayName = 'Feriados') {
      buttonHoliday = document.createElement('button');
      buttonHoliday.setAttribute('id', 'bt-holidays')
      buttonHoliday.innerText = buttonHolidayName;

      //selecionando a div com classe buttons-container:
      divButtonsContainer = document.getElementsByClassName('buttons-container')[0];

      //Adicionando botão como filho da div
      divButtonsContainer.appendChild(buttonHoliday);

  }

  //Chamando a função Holiday()
  Holiday()

  //Exercício 3:
  buttonHoliday = document.getElementById('bt-holidays')
  buttonHoliday.addEventListener('click', changeBackgroundColorHolidays)

  function changeBackgroundColorHolidays() {
    holidays = document.getElementsByClassName('holiday')
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }

  //Exercicio 4:
  function buttonFriday(buttonName = 'Sexta-feira') {
    let buttonFriday = document.createElement('button');
    buttonFriday.setAttribute('id', 'btn-friday');
    buttonFriday.innerText = buttonName;

    //selecionando div buttons-container:
    divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
    divButtonsContainer.appendChild(buttonFriday);

  }

  buttonFriday();

  //Exercício 5
  //Para garantir que a estilização das sextas-feiras permanaçam iguais aos demais dias:
  let styleButtonFriday = false;
  function changeStyleFriday() {
    if (styleButtonFriday) {
      changeFontColorFriday('119, 119, 119');
      styleButtonFriday = false;
    } else {
      changeFontColorFriday('255, 0, 0');
      styleButtonFriday = true;
    }

  }

  function changeFontColorFriday(color) {
    let liTagsFriday = document.getElementsByClassName('friday');
    for (let index = 0; index < liTagsFriday.length; index += 1) {
      liTagsFriday[index].style.color = `rgb(${color})`
    }
  }

  let buttonFridayId = document.getElementById('btn-friday')
  buttonFridayId.addEventListener('click', changeStyleFriday)

  //Exercicio 6
  //Para receber todos os dias do mês:
  daysMonth = document.getElementsByClassName('day')

  //Função para aumentar a fonte do List Item:
  function addZoomLi(event) {
    event.target.style.fontSize = '40px';
  }

  function removeZoomLi(event) {
    event.target.style.fontSize = '20px';
  }

  //Para adicionar o evento de mouseover:
  for (let index = 0; index < daysMonth.length; index += 1) {
    daysMonth[index].addEventListener('mouseover', addZoomLi)
    daysMonth[index].addEventListener('mouseleave', removeZoomLi)
  }

  //Exercicio 7:
  //Capturando evento do botão ADICIONAR:
  buttonAddTask = document.getElementById('btn-add');
  buttonAddTask.addEventListener('click', addTask);
  
  function addTask() {
    inputTask = document.getElementById('task-input');
    //selecionando div com classe my-tasks
    divMyTasks = document.getElementsByClassName('my-tasks')[0];
    spanTask = document.createElement('span');
    spanTask.innerText = inputTask.value
    divMyTasks.appendChild(spanTask)
    inputTask.value = '';
    breackRow = document.createElement('br')
    divMyTasks.appendChild(breackRow)
  }

  //Exercício 8:
  function addColorInDivTask(color) {
    //selecionando container de tasks:
    tasksContainer = document.getElementsByClassName('my-tasks')[0];
    divColorTask = document.createElement('div');
    divColorTask.className = 'task'
    divColorTask.style.backgroundColor = color
    tasksContainer.appendChild(divColorTask)
  }

  addColorInDivTask('green');