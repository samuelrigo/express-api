require("dotenv").config();
const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const verificarApiKey = require("./middlewares/verificarApiKey");
const tratadorDeErros = require("./middlewares/tratadorDeErros");

const app = express();
const emProducao = process.env.NODE_ENV === "production";

const origemPermitida = "http://localhost:8080";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: { erro: "Muitas requisicoes, tente novamente mais tarde" },
});

const tarefaRouter = require("./routes/tarefas");
const comentariosRouter = require("./routes/comentarios");

app.use(morgan(emProducao ? "combined" : "dev"));
app.use(express.json());
app.use(
  cors({
    origin: emProducao ? [origemPermitida] : "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);
app.use(helmet());
app.use(limiter);
app.use(verificarApiKey);
app.use("/tarefas", tarefaRouter);
app.use("/tarefas/:tarefaId/comentarios", comentariosRouter);
app.use(tratadorDeErros);

module.exports = app;
