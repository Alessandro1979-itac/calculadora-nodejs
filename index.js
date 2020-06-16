const calculadora = require("./calc");
const prompt = require("prompt-sync")();

function options() {
  console.log(`
  1 - Somar
  2 - Subtrair
  3 - Multiplicar
  4 - Dividir
  0 - Sair
  `);
}

function optionSelected(opcao) {
  const num1 = Number(prompt("Digite numero 1: "));
  const num2 = Number(prompt("Digite numero 2: "));

  if (opcao === "1") {
    return calculadora.soma(num1, num2);
  }
  else if (opcao === "2") {
    return calculadora.subtracao(num1, num2);
  }
  else if (opcao === "3") {
    return calculadora.multiplicacao(num1, num2);
  }
  else {
    return calculadora.divisao(num1, num2);
  }
}

let opcao;
while (opcao !== "0") {
  options();
  opcao = prompt("Qual a opção? ");
  const resultado = optionSelected(opcao);

  console.log(`O resultado é ${resultado}`);
}