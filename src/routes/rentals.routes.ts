import { Router } from "express";
import { ensureAuthenticated } from "../shared/middllewares/EnsureAuthenticated";
import { CreateRentalController } from "../modules/rentals/useCases/createRentalUseCase.ts/CreateRentalController";

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();

rentalsRoutes.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalsRoutes };
