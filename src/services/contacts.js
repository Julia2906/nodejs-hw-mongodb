import { ContactsCollection } from '../db/models/contact.js';

import { calculatepaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({page,perPage}) => {
const limit = perPage;
const skip = (page - 1)*perPage;

const contactsQuery = ContactsCollection.find();

  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactsById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  return ContactsCollection.findByIdAndUpdate(contactId, payload, {
    new: true,
  });
};

export const deleteContact = async (contactId) => {
    return ContactsCollection.findByIdAndDelete(contactId);
}