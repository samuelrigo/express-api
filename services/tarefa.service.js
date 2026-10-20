var proximoId = 0;

let tarefas = [
  { id: proximoId++, titulo: "Fazer o primeiro get" },
  { id: proximoId++, titulo: "Fazer a primeira listagem com JSON" },
];

const listarTarefas = () => {
  return tarefas;
};

const buscarTarefaPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tarefa = tarefas.find((t) => t.id === id);
      if (!tarefa) return reject(new ErroHttp(404, "Tarefa não encontrada"));
      resolve(tarefa);
    }, 1000);
  });
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
  const tarefa = tarefas.find((t) => t.id === id);
  tarefa.titulo = req.titulo;
  tarefa.completa = req.completa;
  return tarefa;
};
module.exports = {
  buscarTarefaPorId,
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
};
