const sequelize = require("../configs/config");

const { DataTypes } = require("sequelize");

const Evento = sequelize.define("cliente", {
  nomeEvento: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  data: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Evento;
