import Joi from "joi";
import { CreateWiFiData } from "../services/wifiService.js";

export const wifiSchema = Joi.object<CreateWiFiData>({
    wifiNickname: Joi.string().required(),
    wifiName: Joi.string().required(),
    password: Joi.string().required()
  });