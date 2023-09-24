import { Router } from "express";
import contacts from "../controllers/contacts.js";

const router = Router();


router.get('/', contacts.getAllContacts);

router.get('/:id', contacts.getContact);

export default router;