// Calculadora de area e perimetro
function calc(altura, largura){
    let area = altura * largura
    let perimetro = 2 * (altura + largura)
    console.log(`Área calculada: ${area}cm | Perimetro calculado: ${perimetro}cm`)
}
calc(200, 100)