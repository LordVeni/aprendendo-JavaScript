let pagamento = "debito";

switch (pagamento) {
    case "debito":
        console.log("recebe 10% de desconto");
        break;
    case "dinheiro-pix":
        console.log("recebe 15% de desconto");
        break;
    case "2x":
        console.log("normal sem juros");
    case "mais-2x":
        console.log("mais de 2x");
        break;
    default:
        break;
}