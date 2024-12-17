// Operadores Booleanos: Comparação

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); // false
console.log(numero1 === numero2); // false
console.log(numero1 == "10"); // true
console.log(numero1 === "10"); // false
console.log(numero1 !== numero2); // true
console.log(numero1 > numero2); // false
console.log(numero1 < numero2); // true
console.log(numero1 >= numero2); // false
console.log(numero1 <= numero2); // true

const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 &&  idadePessoa2 >= 18); // true
console.log(idadePessoa1 >= 18 ||  idadePessoa2 >= 18); // true

console.log(!(idadePessoa1 >= 18)); // Retorna verdadeiro se a pessoa for menor de idade. // true