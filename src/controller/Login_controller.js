const Login_service = require('../services/Login_service');

//  Realizar login
const login = async (req, res) => {
    const { cpf, senha } = req.query;
    const response = await Login_service.login(cpf, senha);
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    login,
}
