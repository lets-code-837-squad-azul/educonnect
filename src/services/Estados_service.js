//  Arquivo das regras de negócio

const EstadosRepository = require('../repositories/Estados_repo');


//  Criar um novo estado
const createEstado = async (estado) => {
    
    //  Verificar se as informações do estado estão corretas
    if (!estado.nome) {
        return {
            statusCode: 400,
            data: {
                message: 'Nome do estado é obrigatório'
            }
        }
    }

    //  Se as verificações estiverem ok, criar o estado
    try {
        const novo_estado = await EstadosRepository.createEstado(estado);
        return {
            statusCode: 201,
            data: {
                message: 'Estado criado com sucesso',
                estado: novo_estado
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar estado',
                error: erro
            }
        }
    }
}

//  Retorna todos os estados
const getEstados = async () => {
    try {
        const estados = await EstadosRepository.getEstados();
        if (estados.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Estados retornados com sucesso',
                    estados: estados
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhum estado encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar estados',
                error: erro
            }
        }
    }
}

//  Retorna um estado pelo id
const getEstadoById = async (id) => {
    try {
        const estado = await EstadosRepository.getEstadoById(id);
        if (estado) {
            return {
                statusCode: 200,
                data: {
                    message: 'Estado retornado com sucesso por id',
                    estado: estado
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Estado não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar estado',
                error: erro
            }
        }
    }
}

//  Atualiza um estado
const updateEstado = async (id, estado) => {
    try {
        const estado_atualizado = await EstadosRepository.updateEstado(id, estado);
        if (estado_atualizado == 1) {   //  1 é a quantidade de linhas afetadas
            return {
                statusCode: 200,
                data: {
                    message: 'Estado atualizado com sucesso',
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Estado não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar estado',
                error: erro
            }
        }
    }
}

//  Deleta um estado
const deleteEstado = async (id) => {
    try {
        const estado_deletado = await EstadosRepository.deleteEstado(id);
        if (estado_deletado) {
            return {
                statusCode: 200,
                data: {
                    message: 'Estado deletado com sucesso',
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Estado não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao deletar estado',
                error: erro
            }
        }
    }
}

module.exports = {
    createEstado,
    getEstados,
    updateEstado,
    deleteEstado,
    getEstadoById,
}
