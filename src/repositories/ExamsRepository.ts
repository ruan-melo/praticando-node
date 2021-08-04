import { EntityRepository, Repository } from "typeorm";
import { Exam } from "../models/Exam";

@EntityRepository(Exam)
export class ExamsRepository extends Repository<Exam> {
  async findById(id: string): Promise<Exam | undefined> {
    const exam = await this.findOne(id);

    return exam;
  }
}
