import { getCustomRepository } from "typeorm";
import { Exam } from "../../models/Exam";
import { ExamsRepository } from "../../repositories/ExamsRepository";

export class ListExamsService {
  async execute(): Promise<Exam[]> {
    const usersRepository = getCustomRepository(ExamsRepository);
    const users = await usersRepository.find();
    return users;
  }
}
