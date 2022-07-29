const Monitor = require('../models/Monitor');

//  Criar um novo monitor
const createMonitor = async (monitor) => {
    const res = await Monitor.create(monitor);
    return res;
}

//  Retorna todos os monitores
const getMonitores = async () => {
    const res = await Monitor.findAll();
    return res;
}

//  Retorna um monitor pelo Email
const getMonitorByEmail = async (email) => {
    const res = await Monitor.findOne({
        where: {
            email: email
        }
    });
    return res;
}

//  Retorna um monitor pelo CPF
const getMonitorByCpf = async (cpf) => {
    const res = await Monitor.findOne({
        where: {
            cpf: cpf
        }
    });
    return res;
}

//  Retorna um monitor pelo id
const getMonitorById = async (id) => {
    const res = await Monitor.findByPk(id);
    return res;
}

//  Atualizar um monitor
const updateMonitor = async (id, monitor) => {
    const res = await Monitor.update(monitor, {
        where: {
            id: id
        }
    });
    return res;
}

//  Deletar um monitor
const deleteMonitor = async (id) => {
    const res = await Monitor.destroy({
        where: {
            id: id
        }
    });
    return res;
}

module.exports = {
    createMonitor,
    getMonitores,
    updateMonitor,
    deleteMonitor,
    getMonitorByEmail,
    getMonitorByCpf,
    getMonitorById,
}
