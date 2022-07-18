import Joi from "joi";
import { CreateUserData } from "../services/authService.js";

export const signUpSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
  });

  export const signInSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

