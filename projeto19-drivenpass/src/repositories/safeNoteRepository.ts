import prisma from "../config/database.js";
import { CreateNoteData } from "../services/safeNoteService.js";

async function insert(CreateNoteData: CreateNoteData) {
    await prisma.safeNote.create({
        data: CreateNoteData
    });
};

export default {
    insert
};  