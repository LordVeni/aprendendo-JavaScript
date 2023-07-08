function calcularImposto(salario, beneficio) {
    const desconto = salario * 0.05;
    const salarioTransferido = salario - desconto + beneficio;
  
    console.log('Salário a ser transferido:', salarioTransferido);
  }

  const salarioBruto = 2000;
  const adicionalBeneficio = 250
  const desconto = calcularImposto(salarioBruto)*(valorSalario);
  calcularImposto(salarioBruto, adicionalBeneficio);