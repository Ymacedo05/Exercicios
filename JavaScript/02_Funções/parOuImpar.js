// Criar uma função que análise um parâmetro e retorne uma string informando que o resultado.

function parImpar(n){
    if(n % 2 === 0){
        return "Par"
    } else {
        return "Impar"
    }
}

console.log(parImpar(3))