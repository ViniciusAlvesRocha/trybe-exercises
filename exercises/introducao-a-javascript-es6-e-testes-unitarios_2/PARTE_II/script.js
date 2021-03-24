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

