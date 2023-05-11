const prompt = require('prompt-sync')();
const num1 = Number(prompt('Digite número 1: '));
const num2 = Number(prompt('Digite número 2: '));
 let resultado = num1 > num2
console.log(`O número 1 é maior que o número 2 ? ${resultado}`);