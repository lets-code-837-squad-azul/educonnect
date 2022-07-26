//  Arquivo para sincronizar e conectar ao banco de dados

const database = require('./db');
const aplicar_relacionamentos = require('./relacionamentos');

module.exports = async () => {
    try {
        aplicar_relacionamentos();
        // await database.sync({ alter: true, logging: false });    //  Atualiza o banco de dados de acordo com as models
        await database.authenticate();  //  Autentica o banco de dados
        return console.log('Conexão com o banco de dados realizada com sucesso!');
    }
    catch (error) {
        return console.log('Erro ao conectar com o banco de dados: ' + error);
    }
}
