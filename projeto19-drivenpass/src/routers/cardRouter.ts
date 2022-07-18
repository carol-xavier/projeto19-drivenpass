import { Router } from "express";
import verifyToken from "../services/tokenService.js";
import {
    createCard,
    getAllCards,
    getCard,
    deleteCard
} from "../controllers/cardController.js";
import { cardSchema } from "../schemas/cardSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const cardRouter = Router();

cardRouter.use(verifyToken);
cardRouter.post("/cards", validateSchemaMiddleware(cardSchema), createCard);
cardRouter.get("/cards", getAllCards);
cardRouter.get("/cards/:id", getCard);
cardRouter.delete("/cards/:id", deleteCard);

export default cardRouter;
