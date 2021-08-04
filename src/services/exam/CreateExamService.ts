import { getCustomRepository } from "typeorm";
import { Exam } from "../../models/Exam";
import { ExamsRepository } from "../../repositories/ExamsRepository";

interface ExamParams {
  title: string;
}

export class CreateExamService {
  async execute({ title }: ExamParams): Promise<Exam> {
    const examsRepository = getCustomRepository(ExamsRepository);
    const exam = examsRepository.create({ title });

    await examsRepository.save(exam);

    return exam;
  }
}
