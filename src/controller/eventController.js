const Evento = require("../models/eventos");
const Participante = require("../models/participantes");
 
const EventController = {
  // Criar um novo evento
  create: async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;
 
      const novoEvento = await Evento.create({ nome, data, localizacao });
 
      return res.status(200).json({
        msg: "Evento criado com sucesso",
        evento: novoEvento,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao criar o evento. Contate o suporte.",
      });
    }
  },
 
  // Buscar um evento específico
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const evento = await Evento.findByPk(id);
 
      if (!evento) {
        return res.status(404).json({ msg: "Evento não encontrado" });
      }
 
      return res.status(200).json({
        msg: "Evento encontrado com sucesso",
        evento,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao buscar o evento." });
    }
  },
 
  // Buscar todos os eventos
  getAll: async (req, res) => {
    try {
      const eventos = await Evento.findAll();
      return res.status(200).json({
        msg: "Eventos encontrados com sucesso",
        eventos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao buscar os eventos." });
    }
  },
 
  // Atualizar um evento
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, data, localizacao } = req.body;
 
      const evento = await Evento.findByPk(id);
      if (!evento) {
        return res.status(404).json({ msg: "Evento não encontrado" });
      }
 
      await evento.update({ nome, data, localizacao });
 
      return res.status(200).json({ msg: "Evento atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao atualizar o evento." });
    }
  },
 
  // Excluir um evento e seus participantes
  delete: async (req, res) => {
    try {
      const { id } = req.params;
 
      const evento = await Evento.findByPk(id);
      if (!evento) {
        return res.status(404).json({ msg: "Evento não encontrado" });
      }
 
      await evento.destroy(); // Isso também excluirá os participantes associados por causa do 'CASCADE'
      return res.status(200).json({ msg: "Evento excluído com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Erro ao excluir o evento." });
    }
  },
 
  // Listar todos os participantes de um evento específico
  getEvents: async (req, res) => {
    try {
      const { id } = req.params;
      const participantes = await Participante.findAll({where : {eventoId : id}});

      if(!participantes){
        return res.status(400).json({
          msg : "Não tem eventos"
        })

      }

      return res.status(200).json({
          participantes
      })



    } catch (error) {
       console.error(error);
      return res.status(500).json({ msg: "Erro ao excluir o evento." });
    }
  },
};


 
module.exports = EventController;