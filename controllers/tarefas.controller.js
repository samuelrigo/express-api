const tarefaService = require("../services/tarefa.service");

const listarTarefa = async (req, res, next) => {
  try {
    const tarefas = await tarefaService.listarTarefas();
    res.status(200).json(tarefas);
  } catch (err) {
    next(err);
  }
};

const criarTarefa = async (req, res, next) => {
  try {
    const tarefas = await tarefaService.criarTarefa(req.body);
    res.status(201).json(tarefas);
  } catch (err) {
    next(err);
  }
};
module.exports = { listarTarefa, criarTarefa };
