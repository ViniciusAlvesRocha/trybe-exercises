/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
    return names.reduce((sum, name) => { 
        return sum += name.split('').reduce((qtdLetterItemArray, letter) => {
            return letter === 'a' || letter === 'A' ? qtdLetterItemArray += 1 : qtdLetterItemArray;
        }, 0);
    }, 0);
}


assert.deepStrictEqual(containsA(), 20);