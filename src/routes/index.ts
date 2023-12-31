import { Router } from "express";
import { userRoutes } from "./users.routes";
import { genreRoutes } from "./genres.routes";
import { moviesRoutes } from "./movies.routes";
import { rentalsRoutes } from "./rentals.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/genres", genreRoutes);
routes.use("/movies", moviesRoutes);
routes.use("/rentals", rentalsRoutes);

export { routes };
