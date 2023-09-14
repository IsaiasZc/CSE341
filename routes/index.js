import { Router } from "express";

import lesson01Controller from "../controllers/lesson01.js";

const router = Router();

router.get("/", lesson01Controller.isaiasZuniga);

router.get("/rosangelica", lesson01Controller.rosangelicaVasquez);

router.get("/nick", lesson01Controller.nickJara);

router.get("*", lesson01Controller.notFound);

export default router;