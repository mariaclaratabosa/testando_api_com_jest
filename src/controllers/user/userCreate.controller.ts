import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { email, name, age } = req.body;

  const newUser = await userCreateService({ email, name, age });

  return res.status(201).json(newUser);
};

export default userCreateController;
