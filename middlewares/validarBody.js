const validarBody = (schema) => {
  return (req, res, next) => {
    const resultado = schema.safeParse(req.body);
    if (!resultado.success) {
      return res.status(400).json({
        erro: "Dados inválidos",
        detalhes: resultado.error.issues.map((p) => ({
          campo: p.path.join("."),
          mensagem: p.message,
        })),
      });
    }
    req.body = resultado.data;
    next();
  };
};

module.exports = validarBody;
