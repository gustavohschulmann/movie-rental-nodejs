import { Request, Response } from "express";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { container } from "tsyringe";

class CreateRentalController {
    async handle(req: Request, res: Response) {
        const { movie_id, expected_return_date } = req.body;
        const { id } = req.user;

        const createRentalUseCase = container.resolve(CreateRentalUseCase);

        const rental = await createRentalUseCase.execute({ user_id: id, movie_id, expected_return_date });

        return res.status(201).json(rental);
    }
}

export { CreateRentalController };
