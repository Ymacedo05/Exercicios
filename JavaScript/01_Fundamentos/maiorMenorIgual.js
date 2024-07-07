// Verificar se o n1 é maior, menor ou igual ao n2

function verificador(n1, n2){

    if(typeof n1 !== "number" || typeof n2 !== "number"){
        return "Dados invalidos"
    }

    if(n1 > n2){
        return "Maior"

    } else if(n1 < n2){
        return "Menor"

    } else{
        return "Igual"
    }
}

console.log(verificador(10,3))