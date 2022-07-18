import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { signUpSchema, signInSchema } from "../schema/userSchema.js";
import { userSignUp, userSignIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(signUpSchema), userSignUp);
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), userSignIn);

export default authRouter;

