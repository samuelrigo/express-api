const express = require("express");
const app = express();

CHAVES_VALIDADAS = ["abc123", "def456"];

const verificarApiKey = (req, res, next) => {
  const chave = req.headers["x-api-key"];

  if (!chave) {
    return res.status(401).json("Chave de API obrigatório");
  }

  if (!CHAVES_VALIDADAS.includes(chave)) {
    return res.status(403).json("Chave de API inválida");
  }
  next();
};

const tarefaRouter = require("./routes/tarefas");
const comentariosRouter = require("./routes/comentarios");

app.use(express.json());
app.use(verificarApiKey);
app.use("/tarefas", tarefaRouter);
app.use("/tarefas/:tarefaId/comentarios", comentariosRouter);

app.listen(3000, () => {
  console.log("Ouvindo a porta 3000");
});
