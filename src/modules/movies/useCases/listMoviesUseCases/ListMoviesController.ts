import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMoviesUseCase } from "./ListMoviesUseCase";

class ListMoviesController {
    async handle(req: Request, res: Response) {
        const { name, genre_id } = req.query;

        const listMoviesUseCase = container.resolve(ListMoviesUseCase);

        const movies = await listMoviesUseCase.execute({ name: name as string, genre_id: genre_id as string });

        return res.json(movies);
    }
}

export { ListMoviesController };
