/*
4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
*/

names = ['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']

function maior(names) {
    let nameLength = 0
    let nameDescription = ""
    for (let name in names) {
        if (names[name].length > nameLength) {
            nameLength = names[name].length
            nameDescription = names[name]
        }
    }
    return nameDescription
}

console.log(maior(names))