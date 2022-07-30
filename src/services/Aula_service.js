const Aula_repository = require('../repositories/Aula_repo');
const Aluno_repository = require('../repositories/Alunos_repo');

//  Criar uma nova aula
const createAula = async (aula) => {

    //  Verificar se as informações da aula foram preenchidas
    if (!aula.disciplina_id || !aula.monitor_id || !aula.status) {
        return {
            statusCode: 400,
            data: {
                message: 'Os campos disciplina_id, monitor_id e status são obrigatórios'
            }
        }
    }

    //  Se a verificação estiver ok, criar a aula
    try {
        const nova_aula = await Aula_repository.createAula(aula);
        return {
            statusCode: 201,
            data: {
                message: 'Aula criada com sucesso',
                aula: nova_aula
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar aula',
                erro: erro
            }
        }
    }
}

//  Retornar todas as aulas
const getAulas = async () => {
    try {
        const aulas = await Aula_repository.getAulas();
        if (aulas.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aulas retornadas com sucesso',
                    aulas: aulas
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhuma aula encontrada'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar aulas',
                erro: erro
            }
        }
    }
}

//  Retornar uma aula pelo id
const getAulaById = async (id) => {
    try {
        const aula = await Aula_repository.getAulaById(id);
        if (aula) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aula retornada com sucesso pelo id',
                    aula: aula
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aula não encontrada'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar aula',
                erro: erro
            }
        }
    }
}

//  Retornar aulas de um aluno
const getAulasByAluno = async (id) => {

    //  Verificar se o id do aluno foi informado
    if (!id) {
        return {
            statusCode: 400,
            data: {
                message: 'O campo id do aluno é obrigatório'
            }
        }
    }

    //  Verificar se o aluno existe
    try {
        const aluno = await Aluno_repository.getAlunoById(id);
        if (!aluno) {
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
                message: 'Erro ao buscar aluno',
                erro: erro
            }
        }
    }

    //  Se o aluno existir, retornar as aulas do aluno
    try {
        const aulas = await Aula_repository.getAulasByAluno(id);
        if (aulas.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aulas do aluno retornadas com sucesso',
                    aulas: aulas
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhuma aula encontrada para o aluno'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar aulas',
                erro: erro
            }
        }
    }
}

//  Atuallizar uma aula
const updateAula = async (id, aula) => {
    try {
        const aula_atualizada = await Aula_repository.updateAula(id, aula);
        if (aula_atualizada == 1) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aula atualizada com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aula não encontrada'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar aula',
                erro: erro
            }
        }
    }
}

//  Deletar uma aula
const deleteAula = async (id) => {
    try {
        const aula_deletada = await Aula_repository.deleteAula(id);
        if (aula_deletada) {
            return {
                statusCode: 200,
                data: {
                    message: 'Aula deletada com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Aula não encontrada'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao deletar aula',
                erro: erro
            }
        }
    }
}

module.exports = {
    createAula,
    getAulas,
    updateAula,
    deleteAula,
    getAulaById,
    getAulasByAluno,
}
