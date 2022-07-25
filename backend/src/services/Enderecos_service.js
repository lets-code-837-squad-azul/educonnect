//  Arquivo das regras de negócio dos endereços

const EnderecosRepository = require('../repositories/Enderecos_repo');

//  Criar um novo endereço
const createEndereco = async (endereco) => {

    //  Verificando se todas as informações foram preenchidas
    if (!endereco.logradouro || !endereco.numero || !endereco.bairro || !endereco.cidade || !endereco.estado_id || !endereco.cep) {
        return {
            statusCode: 400,
            data: {
                message: 'Todos os campos do endereço são obrigatórios'
            }
        }
    }

    //  Se as verificações estiverem ok, criar o endereço
    try {
        const novo_endereco = await EnderecosRepository.createEndereco(endereco);
        return {
            statusCode: 201,
            data: {
                message: 'Endereço criado com sucesso',
                endereco: novo_endereco
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar endereço',
                error: erro
            }
        }
    }
}

//  Retorna todos os endereços
const getEnderecos = async () => {
    try {
        const enderecos = await EnderecosRepository.getEnderecos();
        return {
            statusCode: 200,
            data: {
                message: 'Endereços retornados com sucesso',
                enderecos: enderecos
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar endereços',
                error: erro
            }
        }
    }
}

//  Atualiza um endereço
const updateEndereco = async (id, endereco) => {
    try {
        const endereco_atualizado = await EnderecosRepository.updateEndereco(id, endereco);

        if (endereco_atualizado == 1) {   //  1 é a quantidade de linhas afetadas
            return {
                statusCode: 200,
                data: {
                    message: 'Endereço atualizado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Endereço não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar endereço',
                error: erro
            }
        }
    }
}

//  Excluir um endereço
const deleteEndereco = async (id) => {
    try {
        const endereco_excluido = await EnderecosRepository.deleteEndereco(id);

        if (endereco_excluido) {
            return {
                statusCode: 200,
                data: {
                    message: 'Endereço excluído com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Endereço não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao excluir endereço',
                error: erro
            }
        }
    }
}

module.exports = {
    createEndereco,
    getEnderecos,
    updateEndereco,
    deleteEndereco,
}
