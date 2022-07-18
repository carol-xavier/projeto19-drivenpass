import { Router } from "express";
import verifyToken from "../services/tokenService.js";
import { createNote } from "../controllers/safeNoteController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import {noteSchema} from "../schemas/safeNoteSchema.js";
const notesRouter = Router();

notesRouter.use(verifyToken);
notesRouter.post("/safe-notes", validateSchemaMiddleware(noteSchema), createNote);

export default notesRouter;