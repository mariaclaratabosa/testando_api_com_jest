import request from "supertest";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import app from "../../../app";

describe("Testing the user routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });
  test("Should be able to create a new user", async () => {
    const email = "email@mail.com";
    const name = "name";
    const age = 20;

    const userData = { email, name, age }
    const response = await request(app).post("/users").send(userData)

    expect(response.status).toBe(201)
    expect(response.body).toEqual(
        expect.objectContaining({
            id: 1,
            email,
            name,
            age,
        })
    )
  });
});
