const mongoose = require('mongoose')
const { Schema } = mongoose

const contactsSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String
})

const Contacts = mongoose.model('Contacts', contactsSchema, 'contacts')

const getAllContacts = async (req, res) => {
  const contacts = await Contacts.find()
  res.status(200).json(contacts)
}

const getContact = async (req, res) => {
  const { id } = req.params
  const contact = await Contacts.findById(id)
  res.json(contact)
}

const createContact = async (req, res) => {
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'birthday'
  ]

  const { body } = req

  const invalid = requiredFields.some((field) => !body[field])

  if (invalid) {
    res.status(400).json({ message: 'Missing required fields' })
    return
  }

  const newContact = new Contacts(body)
  await newContact.save()

  res.status(201).json({ id: newContact._id })
}

const updateContact = async (req, res) => {
  const { id } = req.params
  const { body } = req

  try {
    await Contacts.findOneAndUpdate({ _id: id }, body, { new: true })
  } catch (err) {
    return res.status(404).json({ message: 'Contact not found' })
  }

  return res.status(204).send()
}

const deleteContact = async (req, res) => {
  const { id } = req.params

  try {
    await Contacts.deleteOne({ _id: id })
  } catch (err) {
    return res.status(404).json({ message: 'Contact not found' })
  }

  return res.status(200).send({ message: 'Contact deleted' })
}

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
