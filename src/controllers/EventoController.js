const Evento = require("../models/Evento");

const EventController = {
  create: async (req, res) => {
    try {
      const { nomeEvento, data, local } = req.body;
      const EventoCriado = await Evento.create({ nomeEvento, data, local });

      return res.status(200).json({
        msg: "Cliente criado com sucesso!",
        evento: EventoCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o suporte imediatamente!!",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nomeEvento, data, local } = req.body;

      await Evento.update(
        { nomeEvento: nomeEvento, data: data, local: local },
        { where: id }
      );

      return res.status(200).json({
        msg: "Evento atualizado com sucesso!!",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        msg: "Acione o suporte imediatamente!!",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const clientes = await Evento.findAll();

      return res.status(200).json({
        msg: "Eventos encontrados!",
        clientes,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        msg: "Acione o Suporte imediatamente!!",
      });
    }
  },

  getOne: async (req, res) => {},
};
