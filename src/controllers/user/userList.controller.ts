import { Request, Response } from "express";
import userListService from "../../services/user/userList.service";

const userListController = async (req: Request, res: Response) => {
  const users = await userListService();

  return res.json(users);
};

export default userListController;
