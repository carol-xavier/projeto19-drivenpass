import { Router } from "express";
import testeRouter from "./testeRouter";

const router = Router();
router.use(testeRouter);

export default router;