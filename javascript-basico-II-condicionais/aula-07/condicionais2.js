// switch/case
const prompt = require('readline-sync');
// muito útil quando sua variável possui valores especificos:

const permissoes = "admin"; // 'aluno' ou || 'professor' ou || 'admin'

switch (permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas');
        break;
    case 'professor':
        console.log('Você pode criar e visualizar as aulas');
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema');
        break;
    default:
        console.log('Você não tem permissão para acessar o sistema');
        
}        