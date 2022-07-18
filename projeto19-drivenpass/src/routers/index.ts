import { Router } from "express";
import authRouter from "./authRouter.js";
import notesRouter from "./safeNoteRouter.js";

const router = Router();
router.use(authRouter);
router.use(notesRouter);

export default router;