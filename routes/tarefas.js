const express = require("express");
const { ZodError } = require("zod");
const criarTarefaSchema = require("../schemas/criarTarefa.schema");
const validarBody = require("../middlewares/validarBody");
const erroResposta = require("../middlewares/erroResposta");

const router = express.Router();

var proximoId = 0;

let tarefas = [
  { id: proximoId++, titulo: "Fazer o primeiro get" },
  { id: proximoId++, titulo: "Fazer a primeira listagem com JSON" },
];

router.get("/", (req, res) => {
  res.status(200).json(tarefas);
});

router.get("/:id", (req, res) => {
  console.log(req.params);

  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return erroResposta(res, 404, "Tarefa não encontrada");
  }
  res.status(200).json(tarefa);
});

router.post("/", validarBody(criarTarefaSchema), (req, res) => {
  const novaTarefa = {
    id: proximoId++,
    titulo: req.body.titulo,
    prioridade: req.body.prioridade,
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) {
    return erroResposta(res, 404, "Tarefa não encontrada");
  }

  tarefa.titulo = req.body.titulo;
  tarefa.completa = req.body.completa;
  res.status(200).json(tarefa);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);
  if (!tarefa) {
    return erroResposta(res, 404, "Tarefa não encontrada");
  }

  Object.assign(tarefa, req.body);
  res.status(200).json(tarefa);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const indexTarefa = tarefas.findIndex((t) => t.id === id);
  if (indexTarefa === -1) {
    return erroResposta(res, 404, "Tarefa não encontrada");
  }
  tarefas.splice(indexTarefa, 1);
  res.status(204).end();
});

module.exports = router;
