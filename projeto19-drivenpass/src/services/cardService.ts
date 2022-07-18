import { Card } from "@prisma/client";
import cardRepository from "../repositories/cardRepository.js";

export type CreateCardData = Omit<Card, "id">;

async function insert(createCardData:CreateCardData) {
    await cardRepository.insert(createCardData);
}

async function findById(id: number, userId:number) {
    const card = await cardRepository.findById(id, userId);
    if (!card) throw { type: "not_found" };

    return card;
};

async function findAll(userId:number) {
    return await cardRepository.findAll(userId);
}

async function deleteCard(id: number, userId:number) {
    await cardRepository.deleteCard(id, userId)
}

export default {
    insert,
    findById,
    findAll,
    deleteCard
}