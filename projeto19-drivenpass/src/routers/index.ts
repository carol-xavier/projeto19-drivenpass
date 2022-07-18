import { Router } from "express";
import authRouter from "./authRouter.js";
import notesRouter from "./safeNoteRouter.js";
import credentialRouter from "./credentialRouter.js";

const router = Router();
router.use(authRouter);
router.use(notesRouter);
router.use(credentialRouter);

export default router;