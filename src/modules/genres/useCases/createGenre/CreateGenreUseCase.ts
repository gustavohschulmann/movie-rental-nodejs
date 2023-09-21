import { inject, injectable } from "tsyringe";
import { IGenresRepository } from "../../repositories/IGenresRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateGenreUseCase {
    constructor(@inject("GenresRepository") private genresRepository: IGenresRepository) {}

    async execute(name: string) {
        const genreAlreadyExists = await this.genresRepository.findByName(name);
        if (genreAlreadyExists) throw new AppError("Genre already exists!");
        const genre = await this.genresRepository.create(name);

        return genre;
    }
}

export { CreateGenreUseCase };
