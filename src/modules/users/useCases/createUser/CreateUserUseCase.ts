import { inject, injectable } from "tsyringe";
import { ICreateUsersDto } from "../../dtos/ICreateUsersDto";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {}

    async execute({ name, email, password }: ICreateUsersDto) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        const user = await this.usersRepository.create({ name, email, password: passwordHash });
        return user;
    }
}

export { CreateUserUseCase };
