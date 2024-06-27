const prompt = require(prompt - sync);
let ana = 0;
let castela;
let roça;
while (ana < 10) {
  const x = Number(prompt(" escreva um numero: "));
  if (ana == 0) {
    roça = x;
    castela = x;
  } else {
    if (x > castela) castela = x;
  }
  if (x < roça) {
    roça = x;
  }
  ana++;
}

console.log("maior numero", roça);
console.log("menor numero", casetla);
