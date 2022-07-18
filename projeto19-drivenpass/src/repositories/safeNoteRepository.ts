import prisma from "../config/database.js";
import { CreateNoteData } from "../services/safeNoteService.js";

async function insert(CreateNoteData: CreateNoteData) {
    await prisma.safeNote.create({
        data: CreateNoteData
    });
};

async function findById(id: number, userId: number) {
    const note = await prisma.safeNote.findUnique({
        where: { id }
    });
    if (!note) throw { type: "not_found" };
    if (note.userId !== userId) throw { type: "this information doesn't belong to you" };

    return note;
};

async function findAll(userId: number) {
    return await prisma.safeNote.findMany({
        where: { userId }
    });
};

async function deleteNote(id: number, userId: number) {
    const note = await prisma.safeNote.findUnique({
        where: { id },
    });
    if (note.userId !== userId) throw { type: "this information doesn't belong to you" };
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