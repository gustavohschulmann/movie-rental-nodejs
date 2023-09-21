import { Genre } from "@prisma/client";

interface IGenresRepository {
    list(): Promise<Genre[]>;
    create(name: string): Promise<Genre>;
    findByName(name: string): Promise<Genre>;
    findById(id: string): Promise<Genre>;
}

export { IGenresRepository };
