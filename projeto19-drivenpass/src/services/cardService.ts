import { Card } from "@prisma/client";
import cardRepository from "../repositories/cardRepository.js";

export type CreateCardData = Omit<Card, "id">;

async function insert(createCardData:CreateCardData) {
    await cardRepository.insert(createCardData);
}

async function findById(id: number) {
    const card = await cardRepository.findById(id);
    if (!card) throw { type: "not_found" };

    return card;
};

async function findAll() {
    return await cardRepository.findAll();
}

async function deleteCard(id: number) {
    await cardRepository.deleteCard(id)
}

export default {
    insert,
    findById,
    findAll,
    deleteCard
}