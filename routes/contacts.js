import { Router } from 'express'
import contacts from '../controllers/contacts.js'

const router = Router()

router.get('/', contacts.getAllContacts)

router.post('/', contacts.createContact)

router.get('/:id', contacts.getContact)

router.put('/:id', contacts.updateContact)

router.delete('/:id', contacts.deleteContact)

export default router
