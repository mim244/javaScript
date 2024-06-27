const prompt = require("prompt-sync")();
const constante = 10;
while (true) {
  let numero = Number(prompt("digite um numero"));
  if (numero == constante) {
    console.log("parabens,esta correto");
    break;
  }
  if (numero > constante || numero < constante) {
    console.log("errou");
  }
}
