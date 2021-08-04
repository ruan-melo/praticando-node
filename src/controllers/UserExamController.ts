import { Request, Response } from "express";
import { CreateUserExamService } from "../services/userExams/CreateUserExamService";
import { ListUsersExamsService } from "../services/userExams/ListUsersExamsService";
import { UpdateUserExamScoreService } from "../services/userExams/UpdateUserExamScoreService";

export class UserExamController {
  async create(req: Request, res: Response) {
    const { user_id, exam_id } = req.body;
    const createUserExamService = new CreateUserExamService();
    const userExam = await createUserExamService.execute({ user_id, exam_id });

    return res.status(201).json(userExam);
  }

  async show(req: Request, res: Response) {
    const listUsersExamsService = new ListUsersExamsService();
    const usersExams = await listUsersExamsService.execute();

    return res.status(200).json(usersExams);
  }

  async update(req: Request, res: Response) {
    const { id, score } = req.body;
    const updateUserExamScoreService = new UpdateUserExamScoreService();
    const userExam = await updateUserExamScoreService.execute({ id, score });

    return res.status(200).json(userExam);
  }
}
