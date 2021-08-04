import { EntityRepository, Repository } from "typeorm";
import { UserExam } from "../models/UserExam";

@EntityRepository(UserExam)
export class UsersExamsRepository extends Repository<UserExam> {
  async findByUserId(user_id: string): Promise<UserExam[] | undefined> {
    const user_exams = await this.find({
      where: { user: user_id },
      relations: ["user", "exam"],
    });

    return user_exams;
  }

  async findByExamId(exam_id: string): Promise<UserExam[] | undefined> {
    const users_exams = await this.find({
      where: { exam_id },
      relations: ["user", "exam"],
    });

    return users_exams;
  }

  async findById(id: string): Promise<UserExam | undefined> {
    const user_exam = await this.findOne(id);
    return user_exam;
  }
}
