const express = require("express");
const app = express();

const tarefaRouter = require("./routes/tarefas");
const comentariosRouter = require("./routes/comentarios");

app.use(express.json());
app.use("/tarefas", tarefaRouter);
app.use("/tarefas/:tarefaId/comentarios", comentariosRouter);

app.listen(3000, () => {
  console.log("Ouvindo a porta 3000");
});
