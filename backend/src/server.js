//  Arquivo para chamar o servidor

const app = require('./app');
require('dotenv').config();

const port = process.env.PORT;
try {
    app.listen(port, () => {
        console.log('Servidor rodando em http://localhost:' + port);
    });
}
catch (error) {
    console.log('Erro ao iniciar o servidor');
    console.error(error);
}
