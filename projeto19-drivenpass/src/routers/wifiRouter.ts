import { Router } from "express";
import verifyToken from "../services/tokenService.js";
import {
    createWiFi,
    getAllWiFi,
    getWiFi,
    deleteWiFi
} from "../controllers/wifiController.js"
import { wifiSchema } from "../schemas/wifiSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const wifiRouter = Router();

wifiRouter.use(verifyToken);
wifiRouter.post("/wifi", validateSchemaMiddleware(wifiSchema), createWiFi);
wifiRouter.get("/wifi", getAllWiFi);
wifiRouter.get("/wifi/:id", getWiFi);
wifiRouter.delete("/wifi/:id", deleteWiFi);

export default wifiRouter;
