const express = require("express");

const app = express();

app.use(express.json());

let tarefas = [
  { id: 1, titulo: "Fazer o primeiro get" },
  { id: 2, titulo: "Fazer a primeira listagem com JSON" },
];

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

app.get("/sobre", (req, res) => {
  res.send("Aplicativo de gestão de tarefas");
});

app.get("/tarefas", (req, res) => {
  console.log(req.url);
  res.json(tarefas);
});

app.get("/tarefas/:id", (req, res) => {
  console.log(req.params);

  const id = Number(req.params.id);
  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    res.status(404).json("Não foi possível encontrar a tarefa");
  }
  res.status(200).json(tarefa);
});

app.post("/tarefas", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: req.body.titulo,
    completa: false,
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
  c;
});

app.listen(3000, () => {
  console.log("Ouvindo a porta 3000");
});
