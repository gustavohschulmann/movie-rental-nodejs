import { Rental } from "@prisma/client";
import { ICreateRentalsDTO } from "../../dtos/ICreateRentalsDTO";
import { IRentalRepositories } from "../IRentalsRepository";
import prismaClient from "../../../../prisma";

class RentalsRepository implements IRentalRepositories {
    async create({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO): Promise<Rental> {
        const rental = await prismaClient.rental.create({
            data: {
                user_id,
                movie_id,
                expected_return_date,
            },
        });

        return rental;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openRental = await prismaClient.rental.findFirst({
            where: {
                user_id,
                end_at: null,
            },
        });

        return openRental as Rental;
    }
}

export { RentalsRepository };
