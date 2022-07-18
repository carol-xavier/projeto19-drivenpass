import { Router } from "express";
import verifyToken from "../services/tokenService.js";
import {
    createNote,
    getAllNotes,
    getNote,
    deleteNote
} from "../controllers/safeNoteController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { noteSchema } from "../schemas/safeNoteSchema.js";

const notesRouter = Router();

notesRouter.use(verifyToken);
notesRouter.post("/safe-notes", validateSchemaMiddleware(noteSchema), createNote);
notesRouter.get("/safe-notes", getAllNotes);
notesRouter.get("/safe-notes/:id", getNote);
notesRouter.delete("/safe-notes/:id", deleteNote);

export default notesRouter;