import { SafeNote } from "@prisma/client";
import safeNoteRepository from "../repositories/safeNoteRepository.js";

export type CreateNoteData = Omit<SafeNote, "id">;

async function insert(CreateNoteData:CreateNoteData) {
    await safeNoteRepository.insert(CreateNoteData);
};

async function findById(params:type) {
    
}

export default {
    insert
};