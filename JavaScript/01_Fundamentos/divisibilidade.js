// A função deve verificar se um número é divisivel por outro.

function div(n1, n2){
    let res = (n1 % n2) == 0
    if(res){
        return "divisível"
    } else{
        return "não divisível"
    }
}

console.log(div(10,3))