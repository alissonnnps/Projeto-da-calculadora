const entrada = require('prompt-sync')({ sigint: false });

while (true) { // loop infinito até o usuário decidir sair
  console.log("\n===== Calculadora =====");
  console.log("Escolha a operação: + , - , * , /");
  console.log("Digite 'sair' para encerrar o programa.");

  let operacao = entrada("Qual operação deseja realizar? ");

  if (operacao.toLowerCase() === "sair") {
    console.log("Encerrando a calculadora. Até mais!");
    break; // sai do loop
  }

  // Pedir os dois números
  let num1 = parseFloat(entrada("Digite o primeiro número: "));
  let num2 = parseFloat(entrada("Digite o segundo número: "));

  let resultado;

  // Verificar qual operação e calcular
  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "/") {
    if (num2 === 0) {
      console.log("Erro: divisão por zero não é permitida!");
      continue; // volta pro início do loop
    }
    resultado = num1 / num2;
  } else {
    console.log("Operação inválida! Tente novamente.");
    continue; // volta pro início do loop
  }

  console.log(`Resultado: ${resultado}`);
}