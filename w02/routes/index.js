import { Router } from "express";
import controller from "../controllers/controller.js";

const router = Router();

router.get("/professional", controller.professional);


export default router;