import { Router } from "express";
import verifyToken from "../services/tokenService.js";
import {
    createCredential,
    getAllCredentials,
    getCredential,
    deleteCredential
} from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/credentialSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const credentialRouter = Router();

credentialRouter.use(verifyToken);
credentialRouter.post("/credentials", validateSchemaMiddleware(credentialSchema), createCredential);
credentialRouter.get("/credentials", getAllCredentials);
credentialRouter.get("/credentials/:id", getCredential);
credentialRouter.delete("/credentials/:id", deleteCredential);

export default credentialRouter;