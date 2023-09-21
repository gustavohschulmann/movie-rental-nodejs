import "reflect-metadata";
import "./shared/container";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

//Json for communication
app.use(express.json());

app.use(routes);

//express-async-errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`,
    });
});

app.listen(4000, () => console.log("Server is running!"));
