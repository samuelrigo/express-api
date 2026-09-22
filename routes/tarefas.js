const express = require("express");

const router = express.Router();

let tarefas = [
  { id: 1, titulo: "Fazer o primeiro get" },
  { id: 2, titulo: "Fazer a primeira listagem com JSON" },
];

router.get("/", (req, res) => {
  res.status(200).json(tarefas);
});

router.get("/:id", (req, res) => {
  console.log(req.params);

  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    res.status(404).json("Não foi possível encontrar a tarefa");
  }
  res.status(200).json(tarefa);
});

router.post("/", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: req.body.titulo,
    completa: false,
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) {
    res.status(404).json("Não foi possível encontrar a tarefa");
  }

  tarefa.titulo = req.body.titulo;
  tarefa.completa = req.body.completa;
  res.status(200).json(tarefa);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) {
    res.status(404).json("Não foi possível encontrar a tarefa");
  }

  Object.assign(tarefa, req.body);
  res.status(200).json(tarefa);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const indexTarefa = tarefas.findIndex((t) => t.id === id);
  if (indexTarefa === -1) {
    res.status(404).json("Não foi possível encontrar a tarefa");
  }
  tarefas.splice(indexTarefa, 1);
  res.status(204).end();
});

module.exports = router;
