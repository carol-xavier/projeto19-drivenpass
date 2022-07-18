import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schema/userSchema.js";
import { insertUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.use("/sign-up", validateSchemaMiddleware(userSchema), insertUser);

export default authRouter;

