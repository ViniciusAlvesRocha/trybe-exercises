/*
5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
*/
keys = ['personagem', 'origem', 'nota', 'recorrente']

  for (let key in keys) {
    console.log(margarida(keys[key])+" e "+patinhas(keys[key]))
    
    if (margarida(keys[key]) == patinhas(keys[key])) {
        console.log('Ambos recorrentes')
    }
  }

  function margarida(key){
    let margarida = {
        personagem: "Margarida",
        origem: "Pato Donald",
        nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
        recorrente: "Sim"
      };
      
    return margarida[key]

  }

  function patinhas(key){
    let patinhas = {
        personagem: "Tio Patinhas",
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: "NO último MacPatinhas",
        recorrente: "Sim"
      };
    
    return patinhas[key]
      
  }
