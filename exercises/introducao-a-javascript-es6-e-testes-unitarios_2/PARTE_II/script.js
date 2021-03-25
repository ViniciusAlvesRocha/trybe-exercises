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

  /* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

  const getTotalStudents = (lessons) => {
    let sum = 0;
    keys = Object.keys(lessons);
    keys.forEach( key => sum += lessons[key].numeroEstudantes);
    console.log(sum);
  }

getTotalStudents(allLessons(lesson1, lesson2, lesson3));

/* 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.  */

const getValueByNumber = (lesson, key) => {
  let value = Object.keys(lesson)[key];
  return value;
}

console.log(getValueByNumber(lesson1, 0))

/* 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. */

const verifyPair = (lesson, key, value) => {
  let messege = null;
  let isPresentKey = Object.keys(lesson).includes(key);
  let isPresentValue = Object.values(lesson).includes(value);
  if (isPresentKey && isPresentValue) {
    messege = true;
  } else {
    messege = false;
  } 

  return messege;
}

console.log(verifyPair(lesson1, 'professor', 'Maria Clara'));

/* Exercícios BONUS:
1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
*/

const getQtdStudantsMathematics = (objects) => {
  let sum = 0;
  for (let key in objects) {
    if (objects[key].materia === 'Matemática') {
      sum += objects[key].numeroEstudantes;
    }
  }
  return sum;
}

console.log(getQtdStudantsMathematics(allLessons(lesson1, lesson2, lesson3)));

/* 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. */




