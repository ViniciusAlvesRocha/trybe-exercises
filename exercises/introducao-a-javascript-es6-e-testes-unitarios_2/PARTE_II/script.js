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

  /* 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . */

  const allLessons = (lesson1, lesson2, lesson3) => {
    let obj = {};
    obj['lesson1'] = {};
    Object.assign(obj['lesson1'], lesson1);
    obj['lesson2'] = {};
    Object.assign(obj['lesson2'], lesson2);
    obj['lesson3'] = {};
    Object.assign(obj['lesson3'], lesson3);
    
    return obj;
  }

  console.log(allLessons(lesson1, lesson2, lesson3));

