import { Request, Response } from "express";
import credentialService, { CreateCredentialData } from "../services/credentialService.js";
import { createCrdObject } from "../middlewares/credentialMiddleware.js";

export async function createCredential(req: Request, res: Response) {
    const data: CreateCredentialData = req.body;
    const { id } = res.locals.session;
    const userId = id;

    const credential = createCrdObject(data);
    await credentialService.insert({ ...credential, userId })

    res.sendStatus(201);
};