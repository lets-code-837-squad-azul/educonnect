const Monitor_repository = require('../repositories/Monitor_repo');

//  Criar um novo monitor
const createMonitor = async (monitor) => {

    //  Verificar se as informações obrigatórias do monitor foram preenchidas
    if (!monitor.cpf || !monitor.email || !monitor.estado_id || !monitor.nome || !monitor.senha || !monitor.telefone) {
        return {
            statusCode: 400,
            data: {
                message: 'Os campos CPF, Email, Estado, Nome, Senha e Telefone são obrigatórios'
            }
        }
    }

    //  Se as verificações estiverem ok, criar o monitor
    try {
        const novo_monitor = await Monitor_repository.createMonitor(monitor);
        return {
            statusCode: 201,
            data: {
                message: 'Monitor criado com sucesso',
                monitor: novo_monitor
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao criar monitor',
                error: erro
            }
        }
    }
}

//  Retorna todos os monitores
const getMonitores = async () => {
    try {
        const monitores = await Monitor_repository.getMonitores();
        if (monitores.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Monitores retornados com sucesso',
                    monitores: monitores
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhum monitor encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar monitores',
                error: erro
            }
        }
    }
}

//  Retorna um monitor pelo Email
const getMonitorByEmail = async (email) => {
    try {
        const monitor = await Monitor_repository.getMonitorByEmail(email);
        if (monitor) {
            return {
                statusCode: 200,
                data: {
                    message: 'Monitor retornado com sucesso por email',
                    monitor: monitor
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Monitor não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar monitor',
                error: erro
            }
        }
    }
}

//  Retorna um monitor pelo CPF
const getMonitorByCpf = async (cpf) => {
    try {
        const monitor = await Monitor_repository.getMonitorByCpf(cpf);
        if (monitor) {
            return {
                statusCode: 200,
                data: {
                    message: 'Monitor retornado com sucesso por CPF',
                    monitor: monitor
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Monitor não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar monitor',
                error: erro
            }
        }
    }
}

//  Retorna um monitor pelo ID
const getMonitorById = async (id) => {
    try {
        const monitor = await Monitor_repository.getMonitorById(id);
        if (monitor) {
            return {
                statusCode: 200,
                data: {
                    message: 'Monitor retornado com sucesso por ID',
                    monitor: monitor
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Monitor não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar monitor por ID',
                error: erro
            }
        }
    }
}

//  Atualizar um monitor
const updateMonitor = async (id, monitor) => {
    try {
        const monitor_atualizado = await Monitor_repository.updateMonitor(id, monitor);
        if (monitor_atualizado == 1) {
            return {
                statusCode: 200,
                data: {
                    message: 'Monitor atualizado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Monitor não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao atualizar monitor',
                error: erro
            }
        }
    }
}

//  Deletar um monitor
const deleteMonitor = async (id) => {
    try {
        const monitor_deletado = await Monitor_repository.deleteMonitor(id);
        if (monitor_deletado) {
            return {
                statusCode: 200,
                data: {
                    message: 'Monitor deletado com sucesso'
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Monitor não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao deletar monitor',
                error: erro
            }
        }
    }
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
