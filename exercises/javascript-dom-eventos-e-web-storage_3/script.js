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


