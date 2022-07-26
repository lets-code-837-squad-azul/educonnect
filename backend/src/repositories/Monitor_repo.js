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
}
