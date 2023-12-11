const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize; 

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        // process.env.DB_NAME,
        // process.env.DB_USER,
        // process.env.DB_PASSWORD,
        'techblog_db',
        'root',
        '611854kr',
        {
            host: 'localhost', //!<--- "root" or "127.0.0.1" or "localhost"
            dialect: 'mysql',
            port: 3306
        }
        
        );
        // console.log(DB_NAME);
};

module.exports = sequelize;