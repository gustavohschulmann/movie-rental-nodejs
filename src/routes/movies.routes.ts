import { Router } from "express";
import { ensureAuthenticated } from "../shared/middllewares/EnsureAuthenticated";
import { ensureAdmin } from "../shared/middllewares/EnsureAdmin";
import { CreateMoviesController } from "../modules/movies/useCases/createMoviesUseCases/CreateMoviesController";
import { ListMoviesController } from "../modules/movies/useCases/listMoviesUseCases/ListMoviesController";

const moviesRoutes = Router();

const createMoviesController = new CreateMoviesController();
const listMoviesController = new ListMoviesController();

moviesRoutes.post("/", ensureAuthenticated, ensureAdmin, createMoviesController.handle);
moviesRoutes.get("/", listMoviesController.handle);

export { moviesRoutes };
