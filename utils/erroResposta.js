const erroResposta = (res, status, message, details) => {
  return res.status(status).json({
    error: {
      message: message,
      ...(details && { details }),
    },
  });
};
