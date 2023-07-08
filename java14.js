function imc(peso, altura) {
    const resultado = peso / (altura*altura);
    return resultado;
}

console.log(imc(58, 1.73));

function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}
saudacao("marcelo");

function saudacao2() {
    return "Boa noite pessoal"
}
console.log(saudacao2())