import { DataSource } from "typeorm";
import userCreateService from "../../../services/user/userCreate.service";
import { AppDataSource } from "../../../data-source";

describe("Create an user", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.log("Error during Data Source initialization", err);
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });
  test("Should insert the information of the new user in the databse", async () => {
    const email = "patrick@mail.com";
    const name = "name";
    const age = 20;

    const userData = { email, name, age };
    const newUser = await userCreateService(userData);
    expect(newUser).toEqual(
      expect.objectContaining({
        id: 1,
        email,
        name,
        age,
      })
    );
  });
});
