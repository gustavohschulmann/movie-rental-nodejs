import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/repositories/imp/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("token is missing!", 401);
    }
    //separate Bearer word
    const [, token] = authHeader.split(" ");

    const { sub: user_id } = verify(token, "9b1097c79eee5f2f73e5ec05861be827") as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
        throw new AppError("Token is invalist!", 401);
    }

    req.user = {
        id: user_id,
    };

    next();
}
