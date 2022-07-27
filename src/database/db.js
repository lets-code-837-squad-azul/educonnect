//  Conexão com o banco de dados
//  Referência: https://help.heroku.com/QD1AIH8R/how-do-i-use-sequelize-to-connect-to-heroku-postgres

const { Sequelize } = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;
