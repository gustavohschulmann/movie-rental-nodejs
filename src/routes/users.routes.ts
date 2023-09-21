import { Router } from "express";
import { CreateUserUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

const userRoutes = Router();

const createUserControlle = new CreateUserUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post("/", createUserControlle.handle);

userRoutes.post("/login", authenticateUserController.handle);

export { userRoutes };
