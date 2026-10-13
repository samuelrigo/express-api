const { z } = require("zod");

const criarTarefaSchema = z.object({
  titulo: z
    .string()
    .min(3, "O título precisa de ao menos 3 caracteres")
    .max(100, "O limite de caracteres é 100"),
  prioridade: z.int().min(1).max(3).optional(),
});

module.exports = criarTarefaSchema;
