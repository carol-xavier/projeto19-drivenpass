import prisma from "../config/database.js";
import { CreateNoteData } from "../services/safeNoteService.js";

async function insert(CreateNoteData: CreateNoteData) {
    await prisma.safeNote.create({
        data: CreateNoteData
    });
};

async function findById(id: number) {
    const note = await prisma.safeNote.findUnique({
        where: { id }
    });
    if (!note) throw { type: "not_found" };

    return note;
};

async function findAll() {
    return await prisma.safeNote.findMany();
};

async function deleteNote(id: number) {
   await prisma.safeNote.delete({
        where: { id }
    });
};

export default {
    insert,
    findById,
    findAll,
    deleteNote
};  