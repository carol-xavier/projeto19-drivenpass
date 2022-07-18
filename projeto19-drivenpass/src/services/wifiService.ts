import { wifiPassword } from "@prisma/client";
import wifiRepository from "../repositories/wifiRepository.js";

export type CreateWiFiData = Omit<wifiPassword, "id">;

async function insert(createWiFiData:CreateWiFiData) {
    await wifiRepository.insert(createWiFiData);
}

async function findById(id: number) {
    const wifi = await wifiRepository.findById(id);
    if (!wifi) throw { type: "not_found" };

    return wifi;
};

async function findAll() {
    return await wifiRepository.findAll();
}

async function deleteWiFi(id: number) {
    await wifiRepository.deleteWiFi(id)
}

export default {
    insert,
    findById,
    findAll,
    deleteWiFi
};