require("dotenv").config();
const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const verificarApiKey = require("./middlewares/verificarApiKey");
const tratadorDeErros = require("./middlewares/tratadorDeErros");

const app = express();

const porta = process.env.PORT || 3000;

const origemPermitida = "http://localhost:8080";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: { erro: "Muitas requisicoes, tente novamente mais tarde" },
});

const tarefaRouter = require("./routes/tarefas");
const comentariosRouter = require("./routes/comentarios");

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: origemPermitida,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(helmet());
app.use(limiter);
app.use(verificarApiKey);
app.use("/tarefas", tarefaRouter);
app.use("/tarefas/:tarefaId/comentarios", comentariosRouter);
app.use(tratadorDeErros);

app.listen(porta, () => {
  console.log(`Ouvindo a porta ${porta}`);
});
