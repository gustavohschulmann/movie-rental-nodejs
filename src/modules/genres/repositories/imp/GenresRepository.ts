import { Genre } from "@prisma/client";
import { IGenresRepository } from "../IGenresRepository";
import prismaClient from "../../../../prisma";

class GenresRepository implements IGenresRepository {
    async list(): Promise<Genre[]> {
        const genres = await prismaClient.genre.findMany();
        return genres;
    }

    async create(name: string): Promise<Genre> {
        const genre = await prismaClient.genre.create({
            data: {
                name,
            },
        });

        return genre;
    }

    async findByName(name: string): Promise<Genre> {
        const genre = await prismaClient.genre.findFirst({
            where: { name },
        });

        return genre as Genre;
    }

    async findById(id: string): Promise<Genre> {
        const genre = await prismaClient.genre.findFirst({
            where: { id },
        });

        return genre as Genre;
    }
}

export { GenresRepository };
