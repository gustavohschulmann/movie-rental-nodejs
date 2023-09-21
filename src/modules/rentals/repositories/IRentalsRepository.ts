import { Rental } from "@prisma/client";
import { ICreateRentalsDTO } from "../dtos/ICreateRentalsDTO";

interface IRentalRepositories {
    create({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalRepositories };
