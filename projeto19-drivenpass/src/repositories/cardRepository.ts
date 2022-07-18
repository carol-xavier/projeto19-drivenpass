import prisma from "../config/database.js";
import {CreateCardData} from "../services/cardService.js";

async function insert(createCardData:CreateCardData) {
    await prisma.card.create({
        data: createCardData
    });
};

async function findById(id: number) {
    const card = await prisma.card.findUnique({
        where: { id }
    });
    if (!card) throw { type: "not_found" };

    return card;
};

async function findAll() {
    return await prisma.card.findMany();
};

async function deleteCard(id: number) {
   await prisma.card.delete({
        where: { id }
    });
};
 
export default {
    insert,
    findById,
    findAll,
    deleteCard
};