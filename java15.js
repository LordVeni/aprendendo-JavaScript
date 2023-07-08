function imc(peso, altura) {
    const resultado = peso / (altura*altura);
    
    if (resultado <= 18.5){
        return "Essa pessoa é magra";
    }else if(resultado >=18.5 && resultado <=24.9){
        return "Essa pessoa é normal";
    }else if(resultado >=25 && resultado <=29.9){
        return "Essa pessoa é sobrepeso";
    }else if(resultado >=30 && resultado <=34.9){
        return "Essa pessoa tem obesidade grau I";
    }else if(resultado >=35 && resultado <=39.9){
        return "Essa pessoa tem obesidade grau II";
    }else{
        return "Essa pessoa tem obesidade grau III";
    }
}

console.log(imc(58, 1.73));