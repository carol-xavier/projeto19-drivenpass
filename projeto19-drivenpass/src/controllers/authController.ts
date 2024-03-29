import { Request, Response } from "express";
import authService, { CreateUserData } from "../services/authService.js";
import { createUser, createToken } from "../middlewares/authMiddleware.js";
import bcrypt from "bcrypt";

export async function userSignUp(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const user = createUser(data);
    
    await authService.insert(user);

    res.sendStatus(201);
};

export async function userSignIn(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const user = await authService.findUnique(data);
    const passwordValidation = bcrypt.compareSync(data.password, user.password);
    if (!passwordValidation) return res.status(401).send("Somthing is wrong. Check your e-mail and password");

    const token = createToken(data.email, user.id);

    return res.status(201).send({ token });
};