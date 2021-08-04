import { getCustomRepository } from "typeorm";
import { User } from "../../models/User";
import { UsersRepository } from "../../repositories/UsersRepository";

export class ListUsersService {
  async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    return users;
  }
}
