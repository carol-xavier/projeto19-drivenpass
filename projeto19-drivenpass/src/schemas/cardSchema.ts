import Joi from "joi";
import { CreateCardData } from "../services/cardService.js"; 

export const cardSchema = Joi.object<CreateCardData>({
    cardNickname: Joi.string().required(),
    cardNumber: Joi.number().required(),
    printedName: Joi.string().required(),
    cvv: Joi.string().required(),
    expirationDate: Joi.date().required(),
    virtual: Joi.boolean().required(),
    type: Joi.string().required(),
    password: Joi.string().required()
  });
  