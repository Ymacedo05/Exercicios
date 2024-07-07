// 2 - Calculadora de IMC

function imc(altura, peso){
    let imc = (peso / (altura * altura)).toFixed(2)
    let resultado = ""

    if(imc < 16){
        resultado = "magreza grave"

    } else if(imc < 16.9){
        resultado = "magreza moderada"

    } else if(imc < 18.5){
        resultado = "magreza leve"

    } else if(imc < 24.9){
        resultado = "peso ideal"

    } else if(imc < 29.9){
        resultado = "sobrepeso"

    } else {
        resultado = "obsidade"
    }

    console.log(`Seu IMC é: ${imc} | Diagnóstico: ${resultado}`)
}

imc(1.71,70)