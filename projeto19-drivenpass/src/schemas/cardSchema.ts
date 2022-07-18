import Joi from "joi";
import joiDate from "@joi/date";
import { CreateCardData } from "../services/cardService.js"; 

const JoiD = Joi.extend(joiDate);

export const cardSchema = Joi.object<CreateCardData>({
    cardNickname: Joi.string().required(),
    cardNumber: Joi.number().required(),
    printedName: Joi.string().required(),
    cvv: Joi.string().required(),
    expirationDate: JoiD.date().format('DD/MM/YYYY').utc(),
    virtual: Joi.boolean().required(),
    type: Joi.string().required(),
    password: Joi.string().required()
  });
  