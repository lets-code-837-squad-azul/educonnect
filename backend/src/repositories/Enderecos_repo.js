//  Requisições para o banco de dados da tabela enderecos

const Endereco = require('../models/Endereco');

//  Criar um novo endereço
const createEndereco = async (endereco) => {
    const res = await Endereco.create(endereco);
    return res;
}

//  Retorna todos os endereços
const getEnderecos = async () => {
    const res = await Endereco.findAll( { attributes: ['id', 'logradouro', 'numero', 'bairro', 'cidade', 'estado_id', 'cep'] } ); //  attributes define quais colunas serão retornadas
    return res;
}

//  Atualiza um endereço
const updateEndereco = async (id, endereco) => {
    const res = await Endereco.update(endereco, {
        where: { id: id }
    });
    return res;
}

//  Deleta um endereço
const deleteEndereco = async (id) => {
    const res = await Endereco.destroy({
        where: { id: id }
    });
    return res;
}

module.exports = {
    createEndereco,
    getEnderecos,
    updateEndereco,
    deleteEndereco,
}
