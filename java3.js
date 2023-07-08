let idade = -20;

if(idade >=0 && idade <=5){
    console.log("Essa pessoa é um bebê");
}else if(idade >= 6 && idade <=12){
    console.log("Essa pessoa é uma criança");
}else if(idade >= 13 && idade <=17){
    console.log("Essa pessoa é um adolescente");
}else if(idade >= 18 && idade <=60){
    console.log("Essa pessoa é adulta");
}else if(idade <0){
    console.log("Isso não é uma idade")
}else{
    console.log("Essa pessoa é idosa");
}
