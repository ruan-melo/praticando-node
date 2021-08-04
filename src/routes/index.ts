import { Router } from "express";
import { usersRouter } from "./UsersRouter";
import { examsRouter } from "./ExamsRouter";
import { usersExamsRouter } from "./UserExamsRouter";

const router = Router();

router.use(usersRouter);
router.use(examsRouter);
router.use(usersExamsRouter);

export { router };
