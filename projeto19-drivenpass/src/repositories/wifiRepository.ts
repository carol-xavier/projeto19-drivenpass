import prisma from "../config/database.js";
import {CreateWiFiData} from "../services/wifiService.js";

async function insert(createWiFiData:CreateWiFiData) {
    await prisma.wifiPassword.create({
        data: createWiFiData
    });
};

async function findById(id: number) {
    const wifi = await prisma.wifiPassword.findUnique({
        where: { id }
    });
    if (!wifi) throw { type: "not_found" };

    return wifi;
};

async function findAll() {
    return await prisma.wifiPassword.findMany();
};

async function deleteWiFi(id: number) {
   await prisma.wifiPassword.delete({
        where: { id }
    });
};
 
export default {
    insert,
    findById,
    findAll,
    deleteWiFi
};