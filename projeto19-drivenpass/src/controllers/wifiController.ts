import { Request, Response } from "express";
import wifiService, {CreateWiFiData} from "../services/wifiService.js";
import { createWifiObject, getWiFiObjects } from "../middlewares/wifiMiddleware.js"; 
import { decryptString } from "../utils/cryptrUtil.js";

export async function createWiFi(req: Request, res: Response) {
    const data: CreateWiFiData = req.body;
    const { id } = res.locals.session;
    const userId = id;
    const wifi = createWifiObject(data);

    await wifiService.insert({ ...wifi, userId })

    res.sendStatus(201);
};

export async function getAllWiFi(req:Request, res:Response) {
    const data = await wifiService.findAll();
    const wifi = getWiFiObjects(data);
    res.status(302).send(wifi);
};

export async function getWiFi(req:Request, res:Response) {
    const wifiId = parseInt(req.params.id);
    const wifi = await wifiService.findById(wifiId);
    const {wifiNickname, wifiName, password} = wifi;
    const passcode = decryptString(password);

    res.status(302).send({wifiNickname, wifiName, password:passcode});
};

export async function deleteWiFi(req:Request, res:Response) {
    const wifiId = parseInt(req.params.id);
    await wifiService.deleteWiFi(wifiId);

    res.sendStatus(200);
};