import { Request, Response } from "express";
import authService, { CreateUserData } from "../services/authService.js";
import { createUser } from "../middlewares/authMiddleware.js";

export async function insertUser(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const user = createUser(data);
    const existingEmail = await authService.findUnique(user);
    if (existingEmail) return res.status(409).send("This email is already registered");
    await authService.insert(user);

    res.sendStatus(201);
}