const { buscarPorId } = require("../controllers/tarefas.controller");

var proximoId = 0;

let tarefas = [
  { id: proximoId++, titulo: "Fazer o primeiro get" },
  { id: proximoId++, titulo: "Fazer a primeira listagem com JSON" },
];

const listarTarefas = () => {
  return tarefas;
};

const buscarTarefaPorId = (id) => {
  const tarefa = tarefas.find((t) => t.id === id) || null;
  return tarefa;
};

const criarTarefa = (req) => {
  const novaTarefa = {
    id: proximoId++,
    titulo: req.titulo,
    prioridade: req.prioridade,
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
};

const atualizarTarefa = (id, req) => {
  const tarefa = buscarPorId(id);
  if (!tarefa) return null;
  tarefa.titulo = req.titulo;
  tarefa.completa = req.completa;
  return tarefa;
};
const atualizarTarefaParcial = (id, req) => {
  const tarefa = buscarPorId(id);
  if (!tarefa) {
    return null;
  }
  Object.assign(tarefa, req);
  return tarefa;
};

const deletarTarefa = (id) => {
  const indexTarefa = tarefas.findIndex((t) => t.id === id);
  if (indexTarefa === -1) {
    return false;
  }
  tarefas.splice(indexTarefa, 1);
  return true;
};
module.exports = {
  buscarTarefaPorId,
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  atualizarOuCriarTarefa: atualizarTarefaParcial,
  deletarTarefa,
};
