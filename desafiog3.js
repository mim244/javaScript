const prompt = require("prompt-sync")();
let media = 0;
for (let i = 0; i < 10; i++) {
  let x = Number(prompt("escreva um numero maior que 0: "));
  media = media + x;
}
console.log(media / 10);
