let salarioBruto = 3000.00
let salarioLiquido = null
let aliquotaINSS = null
let aliquotaIR = null
//INSS
/* Salário bruto até R$ 1.556,94: alíquota de 8% */
if(salarioBruto<=1556.94){
    aliquotaINSS = 0.92
    salarioBruto *=aliquotaINSS
}else if(salarioBruto>1556.95 && salarioBruto<=2594.92){/* Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9% */
    aliquotaINSS = 0.91
    salarioBruto *=aliquotaINSS
}else if(salarioBruto>2594.93 && salarioBruto<=5189.82){/* Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11% */
    aliquotaINSS = 0.89
    salarioBruto *=aliquotaINSS
}else if(salarioBruto>5189.82){/* Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88 */
    aliquotaINSS = 570.88
    salarioBruto +=aliquotaINSS
}

salarioBrutoAntesCalculoIR = salarioBruto
//IR
if(salarioBruto<=1903.98){/*Até R$ 1.903,98: isento de imposto de renda*/
    aliquotaIR = 0
}else if(salarioBruto>=1903.99 && salarioBruto<=2826.65){/*De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto*/
    aliquotaIR = (salarioBruto*0.075)-142.80
}else if(salarioBruto>=2826.66 && salarioBruto<=3751.05){/*De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto*/
    aliquotaIR = (salarioBruto*0.15)-354.80
}else if(salarioBruto>=3751.06 && salarioBruto<=4664.68){/*De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto*/
    aliquotaIR = (salarioBruto*0,225)-636.13
}else if(salarioBruto>4664.68){/*Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto*/
    aliquotaIR = (salarioBruto*0,275)-869.36
}
salarioLiquido = salarioBrutoAntesCalculoIR-aliquotaIR

console.log(salarioLiquido)