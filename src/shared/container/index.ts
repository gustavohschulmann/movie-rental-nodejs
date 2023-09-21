import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/imp/UsersRepository";
import { IGenresRepository } from "../../modules/genres/repositories/IGenresRepository";
import { GenresRepository } from "../../modules/genres/repositories/imp/GenresRepository";
import { MoviesRepository } from "../../modules/movies/repositories/imp/MoviesRepository";
import { IMoviesRepository } from "../../modules/movies/repositories/IMoviesRepository";
import { IRentalRepositories } from "../../modules/rentals/repositories/IRentalsRepository";
import { RentalsRepository } from "../../modules/rentals/repositories/imp/RentalsRepository";
import { IDateProvider } from "../providers/IDateProvider";
import { DayjsDateProvider } from "../providers/imp/DayjsDateProvider";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<IGenresRepository>("GenresRepository", GenresRepository);
container.registerSingleton<IMoviesRepository>("MoviesRepository", MoviesRepository);
container.registerSingleton<IRentalRepositories>("RentalsRepository", RentalsRepository);

container.registerSingleton<IDateProvider>("DayjsDateProvider", DayjsDateProvider);
