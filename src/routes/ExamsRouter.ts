import { Router } from "express";
import { ExamController } from "../controllers/ExamController";

const examsRouter = Router();
const examsController = new ExamController();

examsRouter.get("/exams", examsController.show);
examsRouter.post("/exams", examsController.create);

export { examsRouter };
