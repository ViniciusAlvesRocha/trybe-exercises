piece = "RAINHA"

switch(piece.toLowerCase()){
    case "peao":
        messege = "move-se uma casa para a frente"
    break;
    case "rainha":
        messege = "move-se horizontal/vertical/diagonal por varias casas"
    break;
    case "rei":
        messege = "move-se vertical/horizontal por apenas uma casa"
    break;
    case "bispo":
        messege = "move-se diagonalmente por várias casas"
    break;
    case "cavalo":
        messege = "move-se duas casas para frente e uma casa para a direita/esquerda"  
    break;
    case "torre":
        messege = "move-se vertical/horizontal por várias casas"
    default:
        messege="Peca invalida!"  
}

console.log(messege)