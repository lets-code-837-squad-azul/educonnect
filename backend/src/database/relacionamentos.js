//  Arquivo para gerenciar os relacionamentos entre as tabelas do banco de dados

const Aluno = require('../models/Aluno');
const Aula = require('../models/Aula');
const Estado = require('../models/Estado');
const Monitor = require('../models/Monitor');
const Disciplina = require('../models/Disciplina');

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

    //  1 Aluno para N Aulas
    Aluno.hasMany(Aula, { foreignKey: 'aluno_id' });
    Aula.belongsTo(Aluno, { foreignKey: 'aluno_id' });

    //  1 Disciplina para N Aulas
    Disciplina.hasMany(Aula, { foreignKey: 'disciplina_id' });
    Aula.belongsTo(Disciplina, { foreignKey: 'disciplina_id' });
}
