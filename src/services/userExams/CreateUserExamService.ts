import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { UserExam } from "../../models/UserExam";
import { ExamsRepository } from "../../repositories/ExamsRepository";
import { UsersExamsRepository } from "../../repositories/UsersExamsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

interface UserExamParams {
  user_id: string;
  exam_id: string;
}

export class CreateUserExamService {
  async execute({ user_id, exam_id }: UserExamParams): Promise<UserExam> {
    //Verificar se o usuario existe
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Usuário não existe", 404);
    }

    //Verificar se o exam existe
    const examsRepository = getCustomRepository(ExamsRepository);
    const exam = await examsRepository.findById(exam_id);

    if (!exam) {
      throw new AppError("Exame não existe", 404);
    }

    //Verificar se o usuário já tem o exam criado
    const usersExamsRepository = getCustomRepository(UsersExamsRepository);
    const alreadyExists = await usersExamsRepository.findByUserId(user_id);

    if (alreadyExists?.length) {
      throw new AppError(
        `Exame ${exam.id}' do usuario ${user.id} - ${user.name} já existe`,
        409
      );
    }

    const userExam = usersExamsRepository.create({ user, exam });

    await usersExamsRepository.save(userExam);

    return userExam;
  }
}
