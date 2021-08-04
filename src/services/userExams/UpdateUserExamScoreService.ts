import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { UserExam } from "../../models/UserExam";
import { UsersExamsRepository } from "../../repositories/UsersExamsRepository";

interface UpdateUserExamScoreParams {
  id: string;
  score: number;
}

export class UpdateUserExamScoreService {
  async execute({ id, score }: UpdateUserExamScoreParams): Promise<UserExam> {
    //FIXME Rota sem proteção, qql um pode alterar (?)
    const usersExamsRepository = getCustomRepository(UsersExamsRepository);
    const userExam = await usersExamsRepository.findById(id);

    //Verifica se user_exam existe e lança erro se necessário.
    if (!userExam) {
      throw new AppError("Exame do usuário não existe", 404);
    }

    userExam.score = score;

    await usersExamsRepository.save(userExam);

    return userExam;
  }
}
