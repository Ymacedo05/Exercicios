//Criar duas funções que receberão dois parâmetros cada e um das funções retornará o maior valor e a outra, o menor valor. 

function maior(n1, n2){
    if(n1 > n2){
        return n1
    } else {
        return n2
    }
}
function menor(n1, n2){
    if(n1 < n2){
        return n1
    } else {
        return n2
    }
}

console.log(`O maior número entre 5 e 3 é: ${maior(5,3)}| Já o menor número entre 10 e 50 é: ${menor(10,50)}`)