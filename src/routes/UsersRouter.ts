import { Router } from "express";
import { UserController } from "../controllers/UserController";

const usersRouter = Router();
const userController = new UserController();

usersRouter.get("/users", userController.show);
usersRouter.post("/users", userController.create);

export { usersRouter };
