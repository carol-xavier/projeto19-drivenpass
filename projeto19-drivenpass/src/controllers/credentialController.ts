import { Request, Response } from "express";
import credentialService, { CreateCredentialData } from "../services/credentialService.js";
import { createCrdObject, getCrdObject } from "../middlewares/credentialMiddleware.js";
import { decryptString } from "../utils/cryptrUtil.js";

export async function createCredential(req: Request, res: Response) {
    const data: CreateCredentialData = req.body;
    const { id } = res.locals.session;
    const userId = id;

    const credential = createCrdObject(data);
    await credentialService.insert({ ...credential, userId })

    res.sendStatus(201);
};

export async function getAllCredentials(req:Request, res:Response) {
    const { id } = res.locals.session;
    const userId = id;
    const data = await credentialService.findAll(userId);
    const credentials = getCrdObject(data);
    
    res.status(302).send(credentials);
};

export async function getCredential(req:Request, res:Response) {
    const credentialId = parseInt(req.params.id);
    const { id } = res.locals.session;
    const userId = id;
    const credential = await credentialService.findById(credentialId, userId);
    const {crdName, url, userName} = credential;
    const passcode = decryptString(credential.password);

    res.status(302).send({crdName, url, userName, password:passcode});
};

export async function deleteCredential(req:Request, res:Response) {
    const credentialId = parseInt(req.params.id);
    const { id } = res.locals.session;
    const userId = id;
    await credentialService.deleteCredential(credentialId,userId);

    res.sendStatus(200);
};