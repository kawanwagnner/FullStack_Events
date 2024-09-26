const Participante = require("../models/participantes");

const ParticipantController = {
  // Criar um novo participante
  create: async (req, res) => {
    try {
      const { nome, email, eventoId } = req.body;

      // Verificar se o participante já está inscrito no evento
      const participanteExistente = await Participante.findOne({
        where: { email, eventoId },
      });

      if (participanteExistente) {
        return res.status(400).json({
          msg: "Participante já registrado neste evento",
        });
      }

      const novoParticipante = await Participante.create({
        nome,
        email,
        eventoId,
      });

      return res.status(200).json({
        msg: "Participante criado com sucesso",
        participante: novoParticipante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao criar o participante.",
      });
    }
  },

  // Buscar um participante específico
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const participante = await Participante.findByPk(id);

      if (!participante) {
        return res.status(404).json({ msg: "Participante não encontrado" });
      }

      return res.status(200).json({
        msg: "Participante encontrado com sucesso",
        participante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao buscar o participante." });
    }
  },

  // Buscar todos os participantes
  getAll: async (req, res) => {
    try {
      const participantes = await Participante.findAll();
      return res.status(200).json({
        msg: "Participantes encontrados com sucesso",
        participantes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao buscar os participantes." });
    }
  },

  // Atualizar um participante
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, eventoId } = req.body;

      const participante = await Participante.findByPk(id);
      if (!participante) {
        return res.status(404).json({ msg: "Participante não encontrado" });
      }

      await participante.update({ nome, email, eventoId });

      return res.status(200).json({ msg: "Participante atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao atualizar o participante." });
    }
  },

  // Excluir um participante
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const participante = await Participante.findByPk(id);
      if (!participante) {
        return res.status(404).json({ msg: "Participante não encontrado" });
      }

      await participante.destroy();
      return res.status(200).json({ msg: "Participante excluído com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao excluir o participante." });
    }
  },


  GetParticipants : async (req, res) => {
    try {
      const { eventoId } = req.params;
      const participantes = await Participante.findAll({where : {eventoId : eventoId}});

      if(!participantes){
        return res.status(400).json({
          msg : "Não tem participantes"
        })

      }

      return res.status(200).json({
          participantes
      })


      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro" });
    }
  },

};

module.exports = ParticipantController;
