// Função que verifica a faixa etaria de uma pessoa pela idade informada.

function verif(idade){
    if(idade < 13){
        return "Criança"

    } else if(idade < 18){
        return "Adolescente"

    } else if(idade < 60){
        return "Adulto"

    } else{
        return "Idoso"
    }
}

console.log(verif(26))