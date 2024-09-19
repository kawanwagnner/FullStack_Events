const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fullstack_events", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
