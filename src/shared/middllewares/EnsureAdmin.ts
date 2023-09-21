import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/repositories/imp/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const user_id = req.user.id;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user.isAdmin) {
        throw new AppError("User is not an admin!", 401);
    }

    next();
}
