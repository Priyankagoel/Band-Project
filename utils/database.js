const Sequelize = require("sequelize");

const sequelize = new Sequelize("band_db", "root", "", {
    dialect: 'sqlite',
    storage: './db.sqlite3'
});


module.exports = sequelize;