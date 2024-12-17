const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual sua idade? '));

// const ehMaiorDeIdade = idade >= 18;

// Estrutura de decisão if/else
if (idade >= 18) {
    console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
        }
