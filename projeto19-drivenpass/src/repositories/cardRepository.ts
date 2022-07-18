import prisma from "../config/database.js";
import { CreateCardData } from "../services/cardService.js";

async function insert(createCardData: CreateCardData) {
    await prisma.card.create({
        data: createCardData
    });
};

async function findById(id: number, userId: number) {
    const card = await prisma.card.findUnique({
        where: { id }
    });
    if (!card) throw { type: "not_found" };
    if (card.userId !== userId) throw { type: "this information doesn't belong to you" };

    return card;
};

async function findAll(userId: number) {
    return await prisma.card.findMany({
        where: { userId }
    });
};

async function deleteCard(id: number, userId: number) {
    const card = await prisma.card.findUnique({
        where: { id },
    });
    if (card.userId !== userId) throw { type: "this information doesn't belong to you" };

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