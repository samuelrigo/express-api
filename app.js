require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const verificarApiKey = require("./middlewares/verificarApiKey");
const tratadorDeErros = require("./middlewares/tratadorDeErros");

const app = express();
const porta = process.env.PORT || 3000;

const tarefaRouter = require("./routes/tarefas");
const comentariosRouter = require("./routes/comentarios");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(verificarApiKey);
app.use("/tarefas", tarefaRouter);
app.use("/tarefas/:tarefaId/comentarios", comentariosRouter);
app.use(tratadorDeErros);

app.listen(porta, () => {
  console.log(`Ouvindo a porta ${porta}`);
});
