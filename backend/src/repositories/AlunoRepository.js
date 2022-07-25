const Alunos = require('../models/Alunos') //SCHEMA ("tabela")

// METODO CRUD ALUNO

// (GET, POST, DELETE, PATCH) <=(VERBOS)
// cria cadastro de usuario no banco de dados (POST)
const createAluno = async (aluno) => {
    return await Alunos.create(aluno)
}

// faz busca de todo os cadastros no banco de dados (GET)
const findAlunos = async () => {
    return await Alunos.find({})
}

// deleta cadastro de usuário no banco de dados pelo "id" (DELETE)
const deleteAlunos = async (id) => {
    return await Alunos.deleteOne({_id: id})
}

// altera cadastro do usuário no banco de dados pelo número do "id" (PATCH)
const patchAlunos = async (id, aluno) => {
    return await Alunos.findByIdAndUpdate(id, {$set:aluno}, {new: true})
}

module.exports = {
    createAluno,
    findAlunos,
    deleteAlunos,
    patchAlunos,
}