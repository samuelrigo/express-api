const tratadorDeErros = (err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;
  const message = err.status ? err.message : "Erro interno no servidor";

  res.status(status).json({ error: { message } });
};
module.exports = tratadorDeErros;
