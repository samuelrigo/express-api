const express = require("express");
const { ZodError } = require("zod");
const criarTarefaSchema = require("../schemas/criarTarefa.schema");
const validarBody = require("../middlewares/validarBody");
const erroResposta = require("../middlewares/erroResposta");
const ErroHttp = require("../utils/erroHttp");

const router = express.Router();

const tarefaController = require("../controllers/tarefas.controller");

router.get("/", tarefaController.listarTarefa);

router.get("/:id", tarefaController.buscarPorId);

router.post("/", validarBody(criarTarefaSchema), tarefaController.criarTarefa);

router.put(
  "/:id",
  validarBody(criarTarefaSchema),
  tarefaController.atualizarTarefa,
);

router.patch(
  "/:id",
  validarBody(criarTarefaSchema),
  tarefaController.atualizarTarefaParcial,
);

router.delete("/:id", tarefaController.deletarTarefa);

module.exports = router;
