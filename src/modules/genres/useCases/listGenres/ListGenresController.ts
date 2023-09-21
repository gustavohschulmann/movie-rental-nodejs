import { Request, Response } from "express";
import { ListGenresUseCase } from "./ListGenresUseCase";
import { container } from "tsyringe";

class ListGenresController {
    async handle(req: Request, res: Response) {
        const listGenresUseCase = container.resolve(ListGenresUseCase);

        const genres = await listGenresUseCase.execute();

        return res.json(genres);
    }
}

export { ListGenresController };
