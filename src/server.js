//  Arquivo para chamar o servidor

const app = require('./app');
require('dotenv').config();

try {
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando em https://educonnect-lets-code-837.herokuapp.com/');
    });
}
catch (error) {
    console.log('Erro ao iniciar o servidor');
    console.error(error);
}
