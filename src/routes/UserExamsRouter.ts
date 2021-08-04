import { Router } from "express";
import { UserExamController } from "../controllers/UserExamController";

const usersExamsRouter = Router();
const userExamController = new UserExamController();

usersExamsRouter.get("/users/exams", userExamController.show);
usersExamsRouter.post("/user/exams", userExamController.create);
usersExamsRouter.put("/user/exams", userExamController.update);

export { usersExamsRouter };
