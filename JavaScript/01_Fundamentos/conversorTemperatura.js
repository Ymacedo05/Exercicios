//1- Criar um conversor de: Celsius x Fahrenheit e Farenheit x Celsius
function conversor(a,b){
    if(a.toLowerCase() == "c"){
        console.log((((b - 32) * 5)/9).toFixed(2))
    } else if(a.toLowerCase() == "f"){
        console.log(((b * 9) / 5 + 32).toFixed(2))
    } else{
        console.log("ERRO - Por favor digite C para conversão em Celsius ou F para conversão em Fahrenheit")
    }
}
conversor("f", 1)