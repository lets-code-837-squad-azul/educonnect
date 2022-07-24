//  Arquivo para sincronizar o banco de dados

const database = require('./db');
const aplicar_relacionamentos = require('./relacionamentos');

module.exports = async () => {
    try {
        aplicar_relacionamentos();
        await database.sync({ alter: true, logging: false });
        return console.log('Conexão com o banco de dados realizada com sucesso!');
    }
    catch (error) {
        return console.log('Erro ao conectar com o banco de dados: ' + error);
    }
}
