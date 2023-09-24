import mongoose, { Schema } from "mongoose";

const contactsSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String,
});

const Contacts = mongoose.model("Contacts", contactsSchema, 'contacts');

const getAllContacts = async (req, res) => {
  const contacts = await Contacts.find();
  res.status(200).json(contacts);
}

const getContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contacts.findById(id);
  res.status(200).json(contact);
}

export default {
  getAllContacts,
  getContact
}