import { SafeNote } from "@prisma/client";
import safeNoteRepository from "../repositories/safeNoteRepository.js";

export type CreateNoteData = Omit<SafeNote, "id">;

async function insert(CreateNoteData: CreateNoteData) {
    await safeNoteRepository.insert(CreateNoteData);
};

async function findById(id: number, userId:number) {
    const note = await safeNoteRepository.findById(id, userId);
    if (!note) throw { type: "not_found" };

    return note;
};

async function findAll(userId:number) {
    return await safeNoteRepository.findAll(userId);
}

async function deleteNote(id: number, userId:number) {
    await safeNoteRepository.deleteNote(id, userId)
}

export default {
    insert,
    findById,
    findAll,
    deleteNote
};