import e, { Request, Response } from "express";
import { CreateGenreUseCase } from "./CreateGenreUseCase";
import { container } from "tsyringe";

class CreateGenreController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createGenreUseCase = container.resolve(CreateGenreUseCase);
        const genre = await createGenreUseCase.execute(name);
        return res.status(201).json(genre);
    }
}

export { CreateGenreController };
