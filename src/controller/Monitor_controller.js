const Monitor_service = require('../services/Monitor_service');

//  Criar um novo monitor
const createMonitor = async (req, res) => {
    const monitor = req.body;
    const response = await Monitor_service.createMonitor(monitor);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna todos os monitores
const getMonitores = async (req, res) => {
    const response = await Monitor_service.getMonitores();
    return res.status(response.statusCode).json(response.data);
}

//  Retorna um monitor pelo Email
const getMonitorByEmail = async (req, res) => {
    const email = req.params.email;
    const response = await Monitor_service.getMonitorByEmail(email);
    return res.status(response.statusCode).json(response.data);
}

//  Retorna um monitor pelo CPF
const getMonitorByCpf = async (req, res) => {
    const cpf = req.params.cpf;
    const response = await Monitor_service.getMonitorByCpf(cpf);
    return res.status(response.statusCode).json(response.data);
}

//  Atualizar um monitor
const updateMonitor = async (req, res) => {
    const id = req.params.id;
    const monitor = req.body;
    const response = await Monitor_service.updateMonitor(id, monitor);
    return res.status(response.statusCode).json(response.data);
}

//  Deletar um monitor
const deleteMonitor = async (req, res) => {
    const id = req.params.id;
    const response = await Monitor_service.deleteMonitor(id);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createMonitor,
    getMonitores,
    updateMonitor,
    deleteMonitor,
    getMonitorByEmail,
    getMonitorByCpf,
}
