import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { AppError } from "./errors/AppError";
import createConnection from "./database/index";

createConnection();

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(router);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error${error.message}`,
    });
  }
);

export { app };
