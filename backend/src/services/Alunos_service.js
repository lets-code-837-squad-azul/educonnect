const Alunos_repository = require('../repositories/Alunos_repo');

//  Criar um novo aluno
const createAluno = async (aluno) => {

    //  Verificar se as informações obrigatórias do aluno estão preenchidas
    if (!aluno.cpf || !aluno.email || !aluno.estado_id || !aluno.nome || !aluno.senha || !aluno.telefone) {
        return {
            statusCode: 400,
            data: {
                message: 'Os campos CPF, Email, Estado, Nome, Senha e Telefone são obrigatórios'
            }
        }
    }

    //  Se as verificações estiverem ok, criar o aluno
    try {
        const novo_aluno = await Alunos_repository.createAluno(aluno);
        return {
            statusCode: 201,
            data: {
                message: 'Aluno criado com sucesso',
                aluno: novo_aluno
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar aluno',
                error: erro
            }
        }
    }
}

//  Retorna todos os alunos
const getAlunos = async () => {
    try {
        const alunos = await Alunos_repository.getAlunos();
        if (alunos.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Alunos retornados com sucesso',
                    alunos: alunos
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhum aluno encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar alunos',
                error: erro
            }
        }
    }
}

//  Atualizar um aluno
const updateAluno = async (id, aluno) => {
    try {
        const aluno_atualizado = await Alunos_repository.updateAluno(id, aluno);
        if (aluno_atualizado == 1) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aluno atualizado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aluno não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar aluno',
                error: erro
            }
        }
    }
}

//  Deletar um aluno
const deleteAluno = async (id) => {
    try {
        const aluno_deletado = await Alunos_repository.deleteAluno(id);
        if (aluno_deletado) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aluno deletado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aluno não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao deletar aluno',
                error: erro
            }
        }
    }
}

module.exports = {
    createAluno,
    getAlunos,
    updateAluno,
    deleteAluno,
}
