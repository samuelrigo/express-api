const express = require("express");
const { ZodError } = require("zod");
const criarTarefaSchema = require("../schemas/criarTarefa.schema");
const validarBody = require("../middlewares/validarBody");
const erroResposta = require("../middlewares/erroResposta");

const router = express.Router();

const tarefaController = require("../controllers/tarefas.controller");

// class ErroHttp extends Error {
//   constructor(status, message) {
//     super(message);
//     this.status = status;
//   }
// }

// function buscarTarefaAsync(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const tarefa = tarefas.find((t) => t.id === id);
//       if (!tarefa) return reject(new ErroHttp(404, "Tarefa não encontrada"));
//       resolve(tarefa);
//     }, 1000);
//   });
// }
router.get("/", tarefaController.listarTarefa);

// router.get("/:id", async (req, res, next) => {
//   console.log(req.params);
//   try {
//     const id = Number(req.params.id);
//     const tarefa = await buscarTarefaAsync(id);
//     res.status(200).json(tarefa);
//   } catch (err) {
//     next(err);
//   }
// });

router.post("/", validarBody(criarTarefaSchema), tarefaController.criarTarefa);

// router.put("/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const tarefa = tarefas.find((t) => t.id === id);
//   if (!tarefa) {
//     return erroResposta(res, 404, "Tarefa não encontrada");
//   }

//   tarefa.titulo = req.body.titulo;
//   tarefa.completa = req.body.completa;
//   res.status(200).json(tarefa);
// });

// router.patch("/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const tarefa = tarefas.find((t) => t.id === id);
//   if (!tarefa) {
//     return erroResposta(res, 404, "Tarefa não encontrada");
//   }

//   Object.assign(tarefa, req.body);
//   res.status(200).json(tarefa);
// });

// router.delete("/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const indexTarefa = tarefas.findIndex((t) => t.id === id);
//   if (indexTarefa === -1) {
//     return erroResposta(res, 404, "Tarefa não encontrada");
//   }
//   tarefas.splice(indexTarefa, 1);
//   res.status(204).end();
// });

module.exports = router;
