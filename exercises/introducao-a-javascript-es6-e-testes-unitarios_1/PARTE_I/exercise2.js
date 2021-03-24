const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const getMoreNumber = (oddsAndEvens) => {
  more = oddsAndEvens[1];
  for (let index in oddsAndEvens) {
    if (oddsAndEvens[index] > more) {
      more = oddsAndEvens[index];
    }
  }
  return more;
}
const arraySort = (oddsAndEvens) => {
  n = getMoreNumber(oddsAndEvens)
  arrayAux = [];
  for (let arrayItem = 0; arrayItem <= n; arrayItem += 1) {
    for (let index = 0; index < oddsAndEvens.length; index += 1) {
      if (oddsAndEvens[index] === arrayItem) {
        arrayAux.push(arrayItem);
      }
    }
  }
  return arrayAux;
}

console.log(`Os números ${arraySort(oddsAndEvens)} se encontram ordenados de forma crescente!`);