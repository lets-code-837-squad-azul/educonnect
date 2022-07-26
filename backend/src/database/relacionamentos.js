//  Arquivo para gerenciar os relacionamentos entre as tabelas do banco de dados

const Aluno = require('../models/Aluno');
const Aluno_Aula = require('../models/Aluno_Aula');
const Aula = require('../models/Aula');
const Estado = require('../models/Estado');
const Monitor = require('../models/Monitor');

module.exports = () => {
    //  1 Estado para N Alunos
    Estado.hasMany(Aluno, { foreignKey: 'estado_id' });
    Aluno.belongsTo(Estado, { foreignKey: 'estado_id' });

    //  1 Estado para N Monitores
    Estado.hasMany(Monitor, { foreignKey: 'estado_id' });
    Monitor.belongsTo(Estado, { foreignKey: 'estado_id' });

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
