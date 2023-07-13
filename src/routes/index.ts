import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller";
import duplicateEmail from "../middlewares/duplicateEmail.middleware";

const routes = Router();

routes.post("/users", duplicateEmail, userCreateController);
routes.get("/users", userListController);

export default routes;
