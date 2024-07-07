// criar uma função que remova os elementos repetidos de um array

function rem(a){
    let novo = []
    for(let c = 0; c < a.length; c++){
        novo.indexOf(a[c]) === -1 ? novo.push(a[c]): false
    }
    return novo
}

function rem2(a){
    let novo = [...new Set(a)]
    return novo
}

let vetor = ["lua", "sol", "lua"]
console.log(rem(vetor))
console.log(rem2(vetor))