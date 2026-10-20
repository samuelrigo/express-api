const tarefaService = require("../services/tarefa.service");

const buscarPorId = async (req, next) => {
  try {
    const id = Number(req.params.id);
    const tarefa = await tarefaService.buscarTarefaPorId(id);
    res.status(200).json(tarefa);
  } catch (err) {
    next(err);
  }
};

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
module.exports = { buscarPorId, listarTarefa, criarTarefa };
