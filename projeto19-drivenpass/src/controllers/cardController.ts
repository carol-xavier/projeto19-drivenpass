import { Request, Response } from "express";
import cardService, { CreateCardData } from "../services/cardService.js";
import { createCardObject, getCardObject } from "../middlewares/cardMiddleware.js";
import { decryptString } from "../utils/cryptrUtil.js";

export async function createCard(req: Request, res: Response) {
    const data: CreateCardData = req.body;
    const { id } = res.locals.session;
    const userId = id;

    const card = createCardObject(data);
    await cardService.insert({ ...card, userId })

    res.sendStatus(201);
};

export async function getAllCards(req: Request, res: Response) {
    const { id } = res.locals.session;
    const userId = id;
    const data = await cardService.findAll(userId);
    const cards = getCardObject(data);
    res.status(302).send(cards);
};

export async function getCard(req: Request, res: Response) {
    const cardId = parseInt(req.params.id);
    const { id } = res.locals.session;
    const userId = id;
    const card = await cardService.findById(cardId, userId);
    const { cardNickname,
        cardNumber,
        printedName,
        expirationDate,
        virtual,
        type,
        cvv,
        password } = card;
    const passcode = decryptString(password);
    const code = decryptString(cvv);

    res.status(302).send({
        cardNickname,
        cardNumber,
        printedName,
        expirationDate,
        virtual,
        type,
        cvv: code,
        password: passcode
    });
};

export async function deleteCard(req: Request, res: Response) {
    const cardId = parseInt(req.params.id);
    const { id } = res.locals.session;
    const userId = id;
    await cardService.deleteCard(cardId, userId);

    res.sendStatus(200);
};