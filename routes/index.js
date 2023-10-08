const { Router } = require('express')
const contactsRouter = require('./contacts.js')
const lesson01Controller = require('../controllers/lesson01.js')

const router = Router()

router.get('/', lesson01Controller.isaiasZuniga)

router.get('/rosangelica', lesson01Controller.rosangelicaVasquez)

router.get('/nick', lesson01Controller.nickJara)

router.use('/contacts', contactsRouter)

router.get('*', lesson01Controller.notFound)

module.exports = router
