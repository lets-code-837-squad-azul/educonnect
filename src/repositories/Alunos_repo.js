const Aluno = require('../models/Aluno') //SCHEMA ("tabela")

// METODO CRUD ALUNO

// (GET, POST, DELETE, PATCH) <=(VERBOS)
// cria cadastro de usuario no banco de dados (POST)
const createAluno = async (aluno) => {
    return await Aluno.create(aluno)
}

// faz busca de todo os cadastros no banco de dados (GET)
const getAlunos = async () => {
    return await Aluno.findAll();
}

//  Retorna um aluno pelo email
const getAlunoByEmail = async (email) => {
    return await Aluno.findOne({
        where: {
            email: email
        }
    });
}

//  Retorna um aluno pelo cpf
const getAlunoByCpf = async (cpf) => {
    return await Aluno.findOne({
        where: {
            cpf: cpf
        }
    });
}

//  Retorna um aluno pelo id
const getAlunoById = async (id) => {
    return await Aluno.findByPk(id);
}

// deleta cadastro de usuário no banco de dados pelo "id" (DELETE)
const deleteAluno = async (id) => {
    return await Aluno.destroy({ where: { id: id } });
}

// altera cadastro do usuário no banco de dados pelo número do "id" (PATCH)
const updateAluno = async (id, aluno) => {
    return await Aluno.update(aluno, { where: { id: id } });
}

module.exports = {
    createAluno,
    getAlunos,
    deleteAluno,
    updateAluno,
    getAlunoByEmail,
    getAlunoByCpf,
    getAlunoById,
}