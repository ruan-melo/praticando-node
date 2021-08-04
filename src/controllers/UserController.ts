import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { CreateUserService } from "../services/user/CreateUserService";
import { ListUsersService } from "../services/user/ListUsersService";

export class UserController {
  async create(req: Request, res: Response) {
    console.log("body:", req.body);
    const { name, email, password } = req.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, password });

    return res.status(201).json(classToClass(user));
  }

  async show(req: Request, res: Response) {
    const listUsersService = new ListUsersService();
    const users = await listUsersService.execute();

    return res.status(200).json(classToClass(users));
  }
}
