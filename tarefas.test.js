const request = require("supertest");
const app = require("./app");

test("GET /tarefas responde 200 com uma lista", async () => {
  const resposta = await request(app)
    .get("/tarefas")
    .set("x-api-key", "abc123");

  expect(resposta.status).toBe(200);
  expect(Array.isArray(resposta.body)).toBe(true);
});
