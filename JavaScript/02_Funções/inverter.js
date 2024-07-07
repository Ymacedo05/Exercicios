//A função deve receber uma string e retornar ela invertida.

function inverter(s){
    return s.split("").reverse().join("")
}

console.log(inverter("Lua"))