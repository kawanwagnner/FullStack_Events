const validateParticipante = (req, res, next) => {
    const { nome, email, eventoId } = req.body;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !eventoId) {
        return res.status(400).json({
            msg: "Campos inválidos para participante. Por favor, preencha todos os campos obrigatórios.",
        });
    }

    // Pode avançar
    return next();
};

const validateParticipanteId = (req, res, next) => {
    const { id } = req.params;

    // Verifica se o ID foi fornecido
    if (!id) {
        return res.status(400).json({
            msg: "ID do participante faltando.",
        });
    }

    // Pode avançar
    return next();
};

module.exports = { validateParticipante, validateParticipanteId };
