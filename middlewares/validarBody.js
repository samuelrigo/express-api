const erroResposta = require("./erroResposta");

const validarBody = (schema) => {
  return (req, res, next) => {
    const resultado = schema.safeParse(req.body);
    if (!resultado.success) {
      const detalhes = resultado.error.issues.map((p) => ({
        campo: p.path.join("."),
        mensagem: p.message,
      }));
      return erroResposta(res, 400, "Dados inválidos", detalhes);
    }
    req.body = resultado.data;
    next();
  };
};

module.exports = validarBody;
