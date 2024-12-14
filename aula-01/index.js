var nomeDoAluno = 'Rawston' // string, Camel case: (texto): Utilize aspas
var idade = 49 // number
var altura = 1.69 // number
var estudando = true // boolean (verdadeiro ou falso)

console.log(nomeDoAluno, typeof nomeDoAluno) // tipo da variável
console.log(idade, typeof idade)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)

var semConteudo; // declarando uma variável

console.log(semConteudo, typeof semConteudo) // undefined, undefined

// Declarando múltiplas variáveis em uma mesma linha
var curso = 'Front-end em React', topico = 'JavaScript Básico I'

console.log(curso, topico) // imprime as variáveis declaradas

// ! Não utilize var em seus códigos JavaScript, utilize let e const.

// Hoisting e Escopos: var x let x const

let notaDoaluno = 10;
const mediaDoAluno = 8; // ! não pode ser alterado

nomeDoAluno =5;
console.log(notaDoAluno, mediaDoAluno) // não é possível alterar a constante
