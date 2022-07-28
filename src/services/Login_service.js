const Alunos_repository = require('../repositories/Alunos_repo');
const Monitores_repository = require('../repositories/Monitor_repo');

//  Realizar login
const login = async (cpf, senha) => {

    //  Verificar se as informações foram preenchidas
    if (!cpf || !senha) {
        return {
            statusCode: 400,
            data: {
                message: 'Os campos CPF e Senha são obrigatórios'
            }
        }
    }

    //  Verificar se o cpf existe no banco de dados
    let aluno, monitor;
    try {
        aluno = await Alunos_repository.getAlunoByCpf(cpf);
        monitor = await Monitores_repository.getMonitorByCpf(cpf);
        if (!aluno && !monitor) {
            return {
                statusCode: 404,
                data: {
                    message: 'CPF não encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao buscar cadastro',
                error: erro
            }
        }
    }

    //  Verificar se a senha está correta
    if (aluno) {
        if (aluno.senha !== senha) {
            return {
                statusCode: 401,
                data: {
                    message: 'Senha incorreta'
                }
            }
        }
    }
    else if (monitor) {
        if (monitor.senha !== senha) {
            return {
                statusCode: 401,
                data: {
                    message: 'Senha incorreta'
                }
            }
        }
    }

    //  Retornar o usuário logado
    if (aluno && monitor) {
        return {
            statusCode: 200,
            data: {
                message: 'Login realizado com sucesso',
                eh_aluno: true,
                eh_monitor: true,
                aluno: aluno,
                monitor: monitor
            }
        }
    }
    else if (aluno) {
        return {
            statusCode: 200,
            data: {
                message: 'Login realizado com sucesso',
                eh_aluno: true,
                eh_monitor: false,
                aluno: aluno
            }
        }
    }
    else {
        return {
            statusCode: 200,
            data: {
                message: 'Login realizado com sucesso',
                eh_aluno: false,
                eh_monitor: true,
                monitor: monitor
            }
        }
    }
}

module.exports = {
    login,
}
