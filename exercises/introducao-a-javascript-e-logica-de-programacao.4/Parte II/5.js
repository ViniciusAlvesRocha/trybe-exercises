/*
5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
*/
inteiros = [2, 3, 2, 5, 8, 2, 3]
relIntQtd = {}

function numeroQueMaisRepete(inteiros, relIntQtd) {

    for (let n = 0; n < inteiros.length; n++) {
        cont = 0
        for (let i = 0; i < inteiros.length; i++) {
            if (inteiros[n]==inteiros[i]) {
                cont++
            }
        }
        relIntQtd[inteiros[n]] = cont
    }

    return maior(relIntQtd)

}

function maior(relIntQtd) {
    num = 0
    qtd = 0
    for (let index in relIntQtd){
        if(relIntQtd[index] > num){
            num = relIntQtd[index]
            qtd = index
        }
    }
    return qtd
}

console.log(numeroQueMaisRepete(inteiros, relIntQtd))
