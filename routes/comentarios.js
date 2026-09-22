const express = require("express");

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  const { tarefaId } = req.params;
  res.status(200).json({ mensagem: "Comentarios da tarefa " + tarefaId });
});

module.exports = router;
