import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
        const tokenResponse = await authenticateUserUseCase.execute(email, password);

        return res.json(tokenResponse);
    }
}

export { AuthenticateUserController };
