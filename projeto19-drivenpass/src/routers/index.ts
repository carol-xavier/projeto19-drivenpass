import { Router } from "express";
import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import notesRouter from "./safeNoteRouter.js";
import credentialRouter from "./credentialRouter.js";
import wifiRouter from "./wifiRouter.js";


const router = Router();
router.use(authRouter);
router.use(notesRouter);
router.use(credentialRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;