const CHAVES_VALIDADAS = ["abc123", "def456"];

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
module.exports = verificarApiKey;
