import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);
        const user = await createUserUseCase.execute({
            name,
            email,
            password,
        });

        return res.status(201).json(user);
    }
}

export { CreateUserUserController };
