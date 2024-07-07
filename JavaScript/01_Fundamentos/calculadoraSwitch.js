// Criar uma calculadora básica envolvendo as operações + - / * e utilizando switch

function calc(n1,op,n2){
    switch(op){
        case "+":
            return n1 + n2
            break
        case "-":
            return n1 - n2
            break
        case "/":
            return n1 / n2
            break
        case "*":
            return n1 * n2
            break
        default:
            return "Dados inválidos"
            break
    }
}

console.log(calc(5,"%",3))