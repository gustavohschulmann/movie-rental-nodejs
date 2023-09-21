import { inject, injectable } from "tsyringe";
import { IGenresRepository } from "../../../genres/repositories/IGenresRepository";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { IListMoviesDTO } from "../../dtos/IListMoviesDTO";

@injectable()
class ListMoviesUseCase {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository
    ) {}

    async execute({ name, genre_id }: IListMoviesDTO) {
        const movies = await this.moviesRepository.list({ name, genre_id });
        return movies;
    }
}

export { ListMoviesUseCase };
