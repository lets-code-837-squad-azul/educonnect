const fetch = require('fetch')

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

