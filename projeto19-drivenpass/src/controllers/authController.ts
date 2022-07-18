import { Request, Response } from "express";
import authService, { CreateUserData } from "../services/authService.js";
import { createUser, createToken } from "../middlewares/authMiddleware.js";
import bcrypt from "bcrypt";

export async function userSignUp(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const user = createUser(data);
    const existingEmail = await authService.findUnique(user);
    if (existingEmail) return res.status(409).send("This email is already registered");
    await authService.insert(user);

    res.sendStatus(201);
};

export async function userSignIn(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const { password } = await authService.findUnique(data);

    const passwordValidation = bcrypt.compareSync(data.password, password);
    if (!passwordValidation) return res.status(401).send("Somthing is wrong. Check your e-mail and password");

    const token = createToken(data.email);

    return res.status(201).send({ token });
};