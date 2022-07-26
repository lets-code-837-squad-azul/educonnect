//  TEST AREA

const Sandbox_rp = require('../repositories/Sandbox_rp');

//  Criar todos os estados
const createTodosEstados = async (estados) => {
    try {
        const estados_criados = await Sandbox_rp.createTodosEstados(estados);
        return {
            statusCode: 201,
            data: {
                message: 'Estados criados com sucesso!',
                estados: estados_criados
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar estados!',
                error: erro
            }
        }
    }
}

//  Criar todas as disciplinas
const createTodasDisciplinas = async (disciplinas) => {
    try {
        const disciplinas_criadas = await Sandbox_rp.createTodasDisciplinas(disciplinas);
        return {
            statusCode: 201,
            data: {
                message: 'Disciplinas criadas com sucesso!',
                disciplinas: disciplinas_criadas
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar disciplinas!',
                error: erro
            }
        }
    }
}

module.exports = {
    createTodosEstados,
    createTodasDisciplinas,
}
