const express = require('express');
const router = express.Router();
const ParticipantController = require('../controller/participantController');
const { validateParticipante, validateParticipanteId } = require('../middlewares/participanteValidator');
 
// Listar todos os participantes
router.get('/', ParticipantController.getAll);
 
// Criar um novo participante com validação
router.post('/', validateParticipante, ParticipantController.create);
 
// Buscar um participante específico
router.get('/:id', validateParticipanteId, ParticipantController.getOne);
 
// Atualizar um participante com validação
router.put('/:id', validateParticipanteId, validateParticipante, ParticipantController.update);
 
// Excluir um participante
router.delete('/:id', validateParticipanteId, ParticipantController.delete);

router.get ('/por-evento/:eventoId', ParticipantController.GetParticipants );
 
module.exports = router;