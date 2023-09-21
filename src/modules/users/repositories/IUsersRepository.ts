import { User } from "@prisma/client";
import { ICreateUsersDto } from "../dtos/ICreateUsersDto";

interface IUsersRepository {
    create({ name, email, password }: ICreateUsersDto): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUsersRepository };
