import { getCustomRepository } from "typeorm";
import { UserExam } from "../../models/UserExam";
import { UsersExamsRepository } from "../../repositories/UsersExamsRepository";

export class ListUsersExamsService {
  async execute(): Promise<UserExam[]> {
    const usersExamsRepository = getCustomRepository(UsersExamsRepository);
    const usersExams = await usersExamsRepository.find();
    return usersExams;
  }
}
