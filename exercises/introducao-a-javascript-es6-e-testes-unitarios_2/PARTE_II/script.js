const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionarTurno = (lesson2, key, value) => {
    const objAux = {};
    objAux[key] = value
    console.log(Object.assign(lesson2, objAux));
  }
  adicionarTurno(lesson2, key = 'turno', value = 'tarde');

  /* 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
  const listKeys = (object) => {
    console.log(Object.keys(object));
  }

  listKeys(lesson1);

  /* 3 - Crie uma função para mostrar o tamanho de um objeto. */
  const objectLength = (object) => {
    console.log(Object.keys(object).length);
  }

  objectLength(lesson3);

  /* 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

  const listValues = (object) => {
    console.log(Object.values(object));
  }

  listValues(lesson1)



