import { Request, Response } from "express";
import safeNoteService, { CreateNoteData } from "../services/safeNoteService.js";

export async function createNote(req: Request, res: Response) {
    const data: CreateNoteData = req.body;
    const { id } = res.locals.session;
    const userId = id;
    await safeNoteService.insert({...data, userId});

    res.sendStatus(201);
};

export async function getNotes(req:Request, res:Response) {
    const noteId = parseInt(req.params.id);

    // if(noteId) await safeNoteService
}