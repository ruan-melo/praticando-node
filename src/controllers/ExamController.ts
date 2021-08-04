import { Request, Response } from "express";
import { CreateExamService } from "../services/exam/CreateExamService";
import { ListExamsService } from "../services/exam/ListExamsService";

export class ExamController {
  async create(req: Request, res: Response) {
    const { title } = req.body;

    const createExamService = new CreateExamService();
    const exam = await createExamService.execute({ title });

    return res.status(201).json(exam);
  }

  async show(req: Request, res: Response) {
    const listExamsService = new ListExamsService();
    const exams = await listExamsService.execute();

    return res.status(200).json(exams);
  }
}
