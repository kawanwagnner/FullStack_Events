const sequelize = require("sequelize");

const { DataTypes } = require("sequelize");

const Participante = sequelize.define("participante", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  eventoId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
