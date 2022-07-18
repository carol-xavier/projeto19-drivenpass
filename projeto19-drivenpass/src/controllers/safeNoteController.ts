import { Request, Response } from "express";
import safeNoteService, { CreateNoteData } from "../services/safeNoteService.js";

export async function createNote(req: Request, res: Response) {
    const data: CreateNoteData = req.body;
    const { id } = res.locals.session;
    const userId = id;
    await safeNoteService.insert({...data, userId});

    res.sendStatus(201);
};

export async function getAllNotes(req:Request, res:Response) {
    const { id } = res.locals.session;
    const userId = id;
    const notes = await safeNoteService.findAll(userId);

    res.status(302).send(notes);
};

export async function getNote(req:Request, res:Response) {
    const { id } = res.locals.session;
    const userId = id;
    const noteId = parseInt(req.params.id);
    const note = await safeNoteService.findById(noteId, userId);

    res.status(302).send(note);
};

export async function deleteNote(req:Request, res:Response) {
    const { id } = res.locals.session;
    const userId = id;
    const noteId = parseInt(req.params.id);
    await safeNoteService.deleteNote(noteId, userId);

    res.sendStatus(200);
};