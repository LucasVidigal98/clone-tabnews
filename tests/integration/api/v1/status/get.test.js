test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const resposneBody = await response.json();
  expect(resposneBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(resposneBody.updated_at).toISOString();
  expect(resposneBody.updated_at).toEqual(parsedUpdatedAt);

  expect(resposneBody.dependencies.database.version).toEqual('16.10');
  expect(resposneBody.dependencies.database.max_connections).toEqual(100);
  expect(resposneBody.dependencies.database.opened_connections).toEqual(1);
});
