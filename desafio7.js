const prompt = require("prompt-sync")();
const yasmin = Number(prompt("digite seu numero"));
for (let i = 1; i <= yasmin; i++) {
  console.log(" ".repeat(yasmin - i), "*".repeat(i + i - 1));
}
