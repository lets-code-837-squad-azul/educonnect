const Aluno_Aula_repository = require('../repositories/Aluno_Aula_repo');

//  Criar um novo aluno_aula
const createAluno_Aula = async (aluno_aula) => {

    //  Verificar se as informações do aluno_aula estão corretas
    if (!aluno_aula.aluno_id || !aluno_aula.aula_id) {
        return {
            statusCode: 400,
            data: {
                message: 'Informações do aluno_id e aula_id são obrigatórios'
            }
        }
    }

    //  Se a verificação estiver ok, criar o aluno_aula
    try {
        const novo_aluno_aula = await Aluno_Aula_repository.createAluno_Aula(aluno_aula);
        return {
            statusCode: 201,
            data: {
                message: 'Aluno_Aula criado com sucesso',
                aluno_aula: novo_aluno_aula
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar aluno_aula',
                error: erro
            }
        }
    }
}

//  Retorna todos os aluno_aulas
const getAluno_Aulas = async () => {
    try {
        const aluno_aulas = await Aluno_Aula_repository.getAluno_Aulas();
        if (aluno_aulas.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aluno_Aulas retornados com sucesso',
                    aluno_aulas: aluno_aulas
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhum aluno_aula encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar aluno_aulas',
                error: erro
            }
        }
    }
}

//  Atualizar um aluno_aula
const updateAluno_Aula = async (id, aluno_aula) => {
    
    try {
        const aluno_aula_atualizado = await Aluno_Aula_repository.updateAluno_Aula(id, aluno_aula);
        if (aluno_aula_atualizado == 1) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aluno_Aula atualizado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aluno_Aula não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar aluno_aula',
                error: erro
            }
        }
    }
}

//  Deletar um aluno_aula
const deleteAluno_Aula = async (id) => {
    try {
        const aluno_aula_deletado = await Aluno_Aula_repository.deleteAluno_Aula(id);
        if (aluno_aula_deletado) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aluno_Aula deletado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aluno_Aula não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao deletar aluno_aula',
                error: erro
            }
        }
    }
}

module.exports = {
    createAluno_Aula,
    getAluno_Aulas,
    updateAluno_Aula,
    deleteAluno_Aula,
}
