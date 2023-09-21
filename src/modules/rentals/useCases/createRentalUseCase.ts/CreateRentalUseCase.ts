import { inject, injectable } from "tsyringe";
import { IRentalRepositories } from "../../repositories/IRentalsRepository";
import { IMoviesRepository } from "../../../movies/repositories/IMoviesRepository";
import { ICreateRentalsDTO } from "../../dtos/ICreateRentalsDTO";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/providers/IDateProvider";

@injectable()
class CreateRentalUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalRepositories,
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository,
        @inject("DayjsDateProvider")
        private dayjsDateProvider: IDateProvider
    ) {}

    async execute({ user_id, movie_id, expected_return_date }: ICreateRentalsDTO) {
        const minHours = 24;

        const userOpenRental = await this.rentalsRepository.findOpenRentalByUser(user_id);
        if (userOpenRental) throw new AppError("User have an open rental!");

        const movieUnavailable = await this.moviesRepository.findUnavailableById(movie_id);

        if (movieUnavailable) throw new AppError("Movie is unavailable!!");

        const compareHours = this.dayjsDateProvider.compareInHours(
            this.dayjsDateProvider.dateNow(),
            expected_return_date
        );

        if (compareHours < minHours) {
            throw new AppError("Invalid rental time!");
        }

        const rental = await this.rentalsRepository.create({
            user_id,
            movie_id,
            expected_return_date,
        });

        await this.moviesRepository.updateAvailable(movie_id, false);

        return rental;
    }
}

export { CreateRentalUseCase };
