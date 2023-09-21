import { User } from "@prisma/client";
import prismaClient from "../../../../prisma";
import { ICreateUsersDto } from "../../dtos/ICreateUsersDto";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    async create({ name, email, password }: ICreateUsersDto): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        created_at: Date;
    }> {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password,
                isAdmin: false,
            },
        });

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await prismaClient.user.findFirst({
            where: {
                email,
            },
        });

        return user as User;
    }

    async findById(id: string): Promise<User> {
        const user = await prismaClient.user.findFirst({
            where: {
                id,
            },
        });

        return user as User;
    }
}

export { UsersRepository };
