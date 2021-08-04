import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { User } from "../../models/User";
import { UsersRepository } from "../../repositories/UsersRepository";

interface UserParams {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: UserParams): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email address already used", 409);
    }

    const user = usersRepository.create({ name, email, password });

    await usersRepository.save(user);

    return user;
  }
}
