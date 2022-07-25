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

module.exports = {
    createEstado,
}
