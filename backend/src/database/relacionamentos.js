//  Arquivo para gerenciar os relacionamentos entre as tabelas do banco de dados

const Aluno = require('../models/Aluno');
const Aluno_Aula = require('../models/Aluno_Aula');
const Aula = require('../models/Aula');
const Endereco = require('../models/Endereco');
const Estado = require('../models/Estado');
const Monitor = require('../models/Monitor');

module.exports = () => {
    //  1 Estado para N Endereços
    Estado.hasMany(Endereco, { foreignKey: 'estado_id' });
    Endereco.belongsTo(Estado, { foreignKey: 'estado_id' });

    //  1 Aluno para N Endereços
    Endereco.hasMany(Aluno, { foreignKey: 'endereco_id' });
    Aluno.belongsTo(Endereco, { foreignKey: 'endereco_id' });

    //  1 Monitor para N Endereços
    Endereco.hasMany(Monitor, { foreignKey: 'endereco_id' });
    Monitor.belongsTo(Endereco, { foreignKey: 'endereco_id' });

    //  1 Monitor para N Aulas
    Monitor.hasMany(Aula, { foreignKey: 'monitor_id' });
    Aula.belongsTo(Monitor, { foreignKey: 'monitor_id' });

    //  N Alunos para N Aulas
    //  Essa relação cria uma nova tabela Aluno_Aula
    Aluno.belongsToMany(Aula, { through: Aluno_Aula, foreignKey: 'aluno_id' });
    Aula.belongsToMany(Aluno, { through: Aluno_Aula, foreignKey: 'aula_id' });

    //  1 Aula para N Aluno_Aulas
    Aluno_Aula.hasMany(Aula, { foreignKey: 'aluno_aula_id' });
    Aula.belongsTo(Aluno_Aula, { foreignKey: 'aluno_aula_id' });
}
