let peso = 57;
let altura = 1.75;

let imc = peso / (altura * altura);

console.log(imc);

if (imc <= 18.5){
    console.log("Essa pessoa é magra");
}else if(imc >=18.5 && imc <=24.9){
    console.log("Essa pessoa é normal");
}else if(imc >=25 && imc <=29.9){
    console.log("Essa pessoa é sobrepeso");
}else if(imc >=30 && imc <=34.9){
    console.log("Essa pessoa tem obesidade grau I");
}else if(imc >=35 && imc <=39.9){
    console.log("Essa pessoa tem obesidade grau II");
}else{
    console.log("Essa pessoa tem obesidade grau III");
}