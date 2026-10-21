const emProducao = process.env.NODE_ENV === "production";
const tratadorDeErros = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    erro: err.status ? err.message : "Erro interno no servidor",
    ...(emProducao ? {} : { stack: err.stack }),
  });
};
module.exports = tratadorDeErros;
