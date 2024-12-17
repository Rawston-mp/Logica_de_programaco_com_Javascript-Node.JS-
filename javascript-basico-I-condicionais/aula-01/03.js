const prompt = require('readline-sync');

const idade = prompt.question('Qual a sua idade? ');

const idadeMumber = Number(idade);

console.log(idadeMumber, typeof idadeMumber);

// Coerção explícita (Conversão Manual)

console.log(Number("x")); // NaN: Not a Number

console.log(String(10), typeof String(10)); // "10" string

console.log(Boolean(-1));

// Coerção implícita (Conversão Automática)

console.log(1 + "1"); // "11" string
console.log("10" + 5); // "105" string
console.log(10 * "5"); // 50 number
console.log(10 / "1"); // 10 number

