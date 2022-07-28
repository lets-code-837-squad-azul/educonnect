const Disciplina_repository = require('../repositories/Disciplinas_repo');

//  Criar uma nova disciplina
const createDisciplina = async (disciplina) => {

    //  Verificar se as informações foram preenchidas
    if (!disciplina.nome) {
        return {
            statusCode: 400,
            data: {
                message: 'Nome da disciplina não informado.'
            }
        }
    }

    //  Se a verificação estiver ok, criar a disciplina
    try {
        const nova_disciplina = await Disciplina_repository.createDisciplina(disciplina);
        return {
            statusCode: 201,
            data: {
                message: 'Disciplina criada com sucesso.',
                disciplina: nova_disciplina
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar a disciplina.',
                error: error
            }
        }
    }
}

//  Retornar todas as disciplinas
const getDisciplinas = async () => {
    try {
        const disciplinas = await Disciplina_repository.getDisciplinas();
        if (disciplinas.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Disciplinas retornadas com sucesso.',
                    disciplinas: disciplinas
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhuma disciplina encontrada.'
                }
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar as disciplinas.',
                error: error
            }
        }
    }
}

//  Atualizar uma disciplina
const updateDisciplina = async (id, disciplina) => {
    try {
        const disciplina_atualizada = await Disciplina_repository.updateDisciplina(id, disciplina);
        if (disciplina_atualizada == 1) {
            return {
                statusCode: 200,
                data: {
                    message: 'Disciplina atualizada com sucesso.'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Disciplina não encontrada.'
                }
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar a disciplina.',
                error: error
            }
        }
    }
}

//  Deletar uma disciplina
const deleteDisciplina = async (id) => {
    try {
        const disciplina_deletada = await Disciplina_repository.deleteDisciplina(id);
        if (disciplina_deletada) {
            return {
                statusCode: 200,
                data: {
                    message: 'Disciplina deletada com sucesso.'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Disciplina não encontrada.'
                }
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao deletar a disciplina.',
                error: error
            }
        }
    }
}

module.exports = {
    createDisciplina,
    getDisciplinas,
    updateDisciplina,
    deleteDisciplina,
}
