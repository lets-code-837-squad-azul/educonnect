const Alunos_service = require('../services/Alunos_service');

//  Criar um novo aluno
const createAluno = async (req, res) => {
    const aluno = req.body;
    const response = await Alunos_service.createAluno(aluno);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna todos os alunos
const getAlunos = async (req, res) => {
    const response = await Alunos_service.getAlunos();
    return res.status(response.statusCode).json(response.data);
}

//  Retorna um aluno pelo Email
const getAlunoByEmail = async (req, res) => {
    const email = req.params.email;
    const response = await Alunos_service.getAlunoByEmail(email);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna um aluno pelo CPF
const getAlunoByCpf = async (req, res) => {
    const cpf = req.params.cpf;
    const response = await Alunos_service.getAlunoByCpf(cpf);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna um aluno pelo ID
const getAlunoById = async (req, res) => {
    const id = req.params.id;
    const response = await Alunos_service.getAlunoById(id);
    return res.status(response.statusCode).json(response.data);
}

//  Atualizar um aluno
const updateAluno = async (req, res) => {
    const id = req.params.id;
    const aluno = req.body;
    const response = await Alunos_service.updateAluno(id, aluno);
    return res.status(response.statusCode).json(response.data);
}

//  Deletar um aluno
const deleteAluno = async (req, res) => {
    const id = req.params.id;
    const response = await Alunos_service.deleteAluno(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createAluno,
    getAlunos,
    updateAluno,
    deleteAluno,
    getAlunoByEmail,
    getAlunoByCpf,
    getAlunoById,
}
