let percent = 101
let messege = null
/* 
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

if(percent>=0 && percent<=100){
    if(percent >= 90){
        messege = "A"
    }else if(percent >=80){
        messege = "B"
    }else if(percent >= 70){
        messege = "C"
    }else if(percent >= 60){
        messege = "D"
    }else if(percent >= 50){
        messege = "E"
    }else if(percent < 50){
        messege = "F"
    }
}else{
    messege = "O valor fornecido ou é maior que 100 ou menor que 0, portanto é inválido"
}

console.log(messege)