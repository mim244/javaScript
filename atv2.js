const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

numbers.push([30, 40, 70]);
console.log("matriz após inserção no fim");
console.log(numbers);

numbers.unshift([5, 15, 25]);
console.log("matriz após inserção no ínicio:");
console.log(numbers);

const linharemovidadofim = numbers.pop();
console.log("linha removida do fim");
console.log(linharemovidadofim);

const linharemovidadoinicio = numbers.shift();
console.log("linha removida do inicio");
console.log(linharemovidadoinicio);

console.log("matriz final");
console.log(numbers);
