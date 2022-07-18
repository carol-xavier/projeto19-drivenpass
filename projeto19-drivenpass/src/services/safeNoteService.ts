import { SafeNote } from "@prisma/client";
import safeNoteRepository from "../repositories/safeNoteRepository.js";

export type CreateNoteData = Omit<SafeNote, "id">;

async function insert(CreateNoteData: CreateNoteData) {
    await safeNoteRepository.insert(CreateNoteData);
};

async function findById(id: number) {
    const note = await safeNoteRepository.findById(id);
    if (!note) throw { type: "not_found" };

    return note;
};

async function findAll() {
    return await safeNoteRepository.findAll();
}

async function deleteNote(id: number) {
    await safeNoteRepository.deleteNote(id)
}

export default {
    insert,
    findById,
    findAll,
    deleteNote
};