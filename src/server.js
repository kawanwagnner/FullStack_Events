const express = require("express");
const sequelize = require("./configs/config");
const app = express();

require("dotenv").config();

sequelize
  .authenticate()

  .then(() => {
    console.log("Conexão estabelecida com sucesso!");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(
      (process.env.PORT = null ? 8080 : process.env.PORT),
      (req, res) => {
        console.log(
          "O server está rodando na porta 8080. http://127.0.0.1:8080"
        );
      }
    );
  })
  .catch((error) => {
    console.error("Erro ao se conectar com o banco: ", error);
  });
