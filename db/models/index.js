const Sequelize = require('sequelize');
const config = require('../../config');

// Create a connnection instance
const sequelize = new Sequelize(
    config.MYSQL_DATABASE,
    config.MYSQL_USER,
    config.MYSQL_PASSWORD,
    {host: config.MYSQL_HOST, dialect: 'mysql'}
);

// Import all models
const db = {
    Client: sequelize.import('./client'),
    Authentication: sequelize.import('./authentication')
};

// This is for making associations between models
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) db[modelName].associate(db);
});

module.exports = db;

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;