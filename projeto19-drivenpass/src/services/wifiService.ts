import { wifiPassword } from "@prisma/client";
import wifiRepository from "../repositories/wifiRepository.js";

export type CreateWiFiData = Omit<wifiPassword, "id">;

async function insert(createWiFiData:CreateWiFiData) {
    await wifiRepository.insert(createWiFiData);
}

async function findById(id: number, userId:number) {
    const wifi = await wifiRepository.findById(id, userId);
    if (!wifi) throw { type: "not_found" };

    return wifi;
};

async function findAll(userId:number) {
    return await wifiRepository.findAll(userId);
}

async function deleteWiFi(id: number, userId:number) {
    await wifiRepository.deleteWiFi(id, userId)
}

export default {
    insert,
    findById,
    findAll,
    deleteWiFi
};