var proximoId = 0;

let tarefas = [
  { id: proximoId++, titulo: "Fazer o primeiro get" },
  { id: proximoId++, titulo: "Fazer a primeira listagem com JSON" },
];

const listarTarefas = () => {
  return tarefas;
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
module.exports = { listarTarefas, criarTarefa };
