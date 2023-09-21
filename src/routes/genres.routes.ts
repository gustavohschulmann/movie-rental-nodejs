import { Router } from "express";
import { ensureAuthenticated } from "../shared/middllewares/EnsureAuthenticated";
import { ensureAdmin } from "../shared/middllewares/EnsureAdmin";
import { CreateGenreController } from "../modules/genres/useCases/createGenre/CreateGenreController";
import { ListGenresController } from "../modules/genres/useCases/listGenres/ListGenresController";

const genreRoutes = Router();

const createGenreController = new CreateGenreController();
const listGenresController = new ListGenresController();

genreRoutes.post("/", ensureAuthenticated, ensureAdmin, createGenreController.handle);
genreRoutes.get("/", listGenresController.handle);

export { genreRoutes };
