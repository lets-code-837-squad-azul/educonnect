// const fetch = require('fetch')

const setAluno = (nome, email, senha, telefone, cpf, nascimento, etnia, genero, escolaridade) => {
    const aluno = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        cpf: cpf,
        nascimento: nascimento,
        etnia: etnia,
        genero: genero, 
        escolaridade: escolaridade
    }
    return aluno
}

const nome = document.getElementByName('nome').value 

const email = document.getElementByName('email').value 

const senha = document.getElementByName('senha').value

const telefone = document.getElementByName('telefone').value

const cpf = document.getElementByName('cpf').value

const nascimento = document.getElementByName('nascimento').value

const etnia = document.getElementsByName('etnia').value

const genero = document.getElementsByName('genero').value

const escolaridade = document.getElementsByName('escolaridade').value

setAluno(nome, email, senha, telefone, cpf, nascimento, etnia, genero, escolaridade)
