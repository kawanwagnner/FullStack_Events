const express = require('express');
const router = express.Router();
const EventController = require('../controller/eventController');
const { validateEvento, validateEventoId } = require('../middlewares/eventoValidator');
 
// Listar todos os eventos
router.get('/', EventController.getAll);
 
// Criar um novo evento com validação
router.post('/', validateEvento, EventController.create);
 
// Buscar um evento específico
router.get('/:id', validateEventoId, EventController.getOne);
 
// Atualizar um evento com validação
router.put('/:id', validateEventoId, validateEvento, EventController.update);
 
// Excluir um evento
router.delete('/:id', validateEventoId, EventController.delete);

router.get('/:id/participante', EventController.getEvents);
 
module.exports = router;